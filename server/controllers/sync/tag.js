var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , TagModel = require('models/tag')
    , TransactionModel = require('models/transaction')
    , Q = require("q");


function TagControler(req){
    this.userId = req.user._id;
    this.tags = req.body.tags || [];
}

TagControler.prototype._create = function(tag, cb){
    cb();
};

TagControler.prototype._remove = function(tag, cb){
    cb();
};

TagControler.prototype._edit = function(currentTag, cb){
    TagModel.isHasTag(currentTag['_id'], this.userId, function(err, tag){
        if(err){
            cb(err);
        }
        if(tag){
            tag.tagName = currentTag.tagName;
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
        if(tag['new']){
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