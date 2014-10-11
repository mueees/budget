var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , TagModel = require('models/tag')
    , TransactionModel = require('models/transaction')
    , Q = require("q");


function TransactionController(transactions, userId){
    this.userId = userId;
    this.transactions = transactions || [];
    this.createdTransactions = [];
}

TransactionController.prototype.updateTagsId = function(createdTagId){
    _.map(this.transactions, function(transaction){

        _.each(createdTagId, function(createdTag){
            if(transaction.tags == createdTag.idBefore){
                transaction.tags = createdTag.idActual;
            }
        })

        return transaction;

    });
};

TransactionController.prototype.filterTags = function(tags){
    var deferred = Q.defer();

    //todo: tags rename to tagId
    if(!tags){
        deferred.resolve();
    }else{
        TagModel.isHasTag(tags, this.userId, function(err, tag){
            if(err){
                logger.error(err);
                return deferred.reject(err);
            }

            if( tag && !tag.isDeleted ) {
                return deferred.resolve(tags);
            }else{
                return deferred.resolve();
            }
        })
    }

    return deferred.promise;
};

TransactionController.prototype._create = function(currentTransaction, cb){
    var _this = this;

    this.filterTags(currentTransaction.tags).then(function(tags){
        var transaction = new TransactionModel({
            date: new Date(currentTransaction.date),
            userId: _this.userId,
            count: currentTransaction.count,
            tags: tags
        });

        async.waterfall([
            function(cb){
                transaction.validate(function(err){
                    if( err ){
                        cb(err);
                    }else{
                        cb(null, transaction);
                    }
                })
            },
            function(transaction, cb){
                transaction.save(function(err){
                    if(err) {
                        return cb(err);
                    }
                    cb(null, transaction);
                })
            }
        ], function(err, transaction){
            if(err){
                logger.error(err);
                return cb(err);
            }

            _this.createdTransactions.push({
                idBefore: currentTransaction._id,
                idActual: transaction._id
            });

            cb(null);
        })
    })
};

TransactionController.prototype.getCreatedId = function(){
    return this.createdTransactions;
};

TransactionController.prototype._remove = function(currentTransaction, cb){
    TransactionModel.deleteById(currentTransaction._id, function(err, transaction){
        if(err){
            logger.error(err);
            return cb(err)
        }
        cb(null);
    })
};

TransactionController.prototype._edit = function(currentTransaction, cb){
    TransactionModel.findById( currentTransaction._id, function ( err, transaction ){

        if( !transaction || transaction.isDeleted ) return cb(null);

        if( currentTransaction.count ) transaction.count = currentTransaction.count;
        if( currentTransaction.tags ) transaction.tags = currentTransaction.tags;
        transaction.updated_at = Date.now();

        transaction.save( function ( err, transaction){
            if(err){
                logger.error(err);
                cb(err);
            }

            cb(null);
        });
    });
};

TransactionController.prototype._sync = function(){
    var deferred = Q.defer();
    var methods = [];
    var _this = this;

    _.each(this.transactions, function(transaction){
        if(transaction.label == 'create'){
            methods.push(function(cb){
                _this._create(transaction, cb);
            })
        }else if( transaction.label == 'remove' ){
            methods.push(function(cb){
                _this._remove(transaction, cb);
            })
        }else if( transaction.label == 'edit' ){
            methods.push(function(cb){
                _this._edit(transaction, cb);
            })
        }
    })

    async.waterfall(methods, function(err){
        if(err){
            deferred.reject(err);
        }
        deferred.resolve();
    })

    return deferred.promise;
};

TransactionController.prototype.sync = function(cb){
    this.cb = cb;
    var _this = this;

    Q.when(_this._sync()).done(
        function(){
            cb(null);
        },
        function(err){
            cb(err);
        }
    )
};

module.exports = TransactionController;