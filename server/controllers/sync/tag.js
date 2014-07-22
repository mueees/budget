var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , TagModel = require('models/tag')
    , TransactionModel = require('models/transaction')
    , Q = require("q");


function TagControler(tags, userId){
    this.userId = userId;
    this.tags = tags || [];
    this.createdTag = [];
}

TagControler.prototype._create = function(currentTag, cb){

    var _this = this;

    var tag = new TagModel({
        tagName: currentTag.tagName,
        userId: this.userId
    });

    async.waterfall([
        function(cb){
            tag.validate(function(err){
                ( err ) ? cb(null, tag) : cb(err);
            })
        },
        function(cb){
            tag.save(function(err){
                if(err) {
                    return cb("An error occurred. Please try again later");
                }
                cb(null, tag);
            })
        }
    ], function(err, tag){
        if(err){
            cb(err);
        }

        _this.createdTag.push({
            idBefore: currentTag._id,
            idActual: tag._id
        })

        cb(null);

    })
};

TagControler.prototype.getCreatedId = function(){
    return this.createdTag;
}

TagControler.prototype._remove = function(currentTag, cb){
    TagModel.isHasTag(currentTag['_id'], this.userId, function(err, tag){
        if(err){
            cb(err);
        }
        if(tag && !tag.isDeleted){
            tag.isDeleted = true;
            tag.updated_at = Date.now();
            tag.save(function(err){
                if(err){
                    cb(err);
                }
                cb(null);
            })
        }else{
            cb(null);
        }
    });
};

TagControler.prototype._edit = function(currentTag, cb){
    TagModel.isHasTag(currentTag['_id'], this.userId, function(err, tag){
        if(err){
            cb(err);
        }
        if(tag && !tag.isDeleted){
            tag.tagName = currentTag.tagName;
            tag.updated_at = Date.now();
            tag.save(function(err){
                if(err){
                    cb(err);
                }
                cb(null);
            })
        }else{
            cb(null);
        }
    })
};

TagControler.prototype._sync = function(){
    var deferred = Q.defer();
    var methods = [];
    var _this = this;

    _.each(this.tags, function(tag){
        if(tag['create']){
            methods.push(function(cb){
                _this._create(tag, cb);
            })
        }else if( tag['remove'] ){
            methods.push(function(cb){
                _this._remove(tag, cb);
            })
        }else if( tag['edit'] ){
            methods.push(function(cb){
                _this._edit(tag, cb);
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

TagControler.prototype.sync = function(cb){
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

module.exports = TagControler;