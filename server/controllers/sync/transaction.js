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
}

TransactionController.prototype.updateTagsId = function(createdTagId){
    _.map(this.transactions, function(transaction){

        _.each(createdTagId, function(createdTag){
            var index = _.indexOf(transaction.tags, createdTag.idBefore);
            if(index != -1){
                transaction.tags.splice(index, 1, createdTag.idActual);
            }
        })

        return transaction;

    });
};

TransactionController.prototype._create = function(currentTransaction, cb){
    var transaction = new TransactionModel({
        userId: this.userId,
        count: currentTransaction.count,
        tags: currentTransaction.tags
    });

    async.waterfall([
        function(cb){
            transaction.validate(function(err){
                ( err ) ? cb(null, transaction) : cb(err);
            })
        },
        function(cb){
            transaction.save(function(err){
                if(err) {

                    cb(err);
                }
                cb(null, transaction);
            })
        }
    ], function(err, transaction){
        if(err){
            logger.error(err);
            return cb(err);
        }

        cb(null);
    })
};

TransactionController.prototype.getCreatedId = function(){
    return this.createdTag;
}

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

        if( !transaction ) return cb(null);

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
        if(transaction['create']){
            methods.push(function(cb){
                _this._create(transaction, cb);
            })
        }else if( transaction['remove'] ){
            methods.push(function(cb){
                _this._remove(transaction, cb);
            })
        }else if( transaction['edit'] ){
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