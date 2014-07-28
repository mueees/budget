var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , TagModel = require('models/tag')
    , TransactionModel = require('models/transaction');

var controller = {
    create: function(req, res, next){
        var data = req.body;

        var tag = new TagModel({
            tagName: data.tagName,
            userId: req.user._id
        });

        async.waterfall([
            function(cb){
                tag.validate(function(err){
                    ( err ) ? cb(null,tag) : cb(err);
                })
            },
            function(cb){
                tag.save(function(err){
                    if(err) {
                        logger.error(err);
                        return cb("An error occurred. Please try again later");
                    }
                    cb(null, tag);
                })
            }
        ], function(err, tag){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }

            res.send({
                _id: tag._id,
                tagName: tag.tagName
            });
            next(tag);
        })

    },
    edit: function(req, res, next){
        var data = req.body;

        TagModel.findById( data._id, function ( err, tag ){

            if(!tag){
                logger.error('Cannot find tag');
                return next(new HttpError(400, 'Cannot find tag'));
            }

            tag.tagName = data.tagName;
            tag.updated_at = Date.now();
            tag.save( function ( err, tag, count ){
                if(err){
                    logger.error(err);
                    return next(new HttpError(400, err.errors));
                }

                res.send({
                    _id: tag._id
                });
                next(tag);
            });
        });
    },
    remove: function(req, res, next){
        var data = req.body;

        async.waterfall([
            //remove from tags
            function(cb){
                TagModel.deleteById(data._id, function(err, tag){
                    if(err){
                        cb(err);
                    }
                    cb(null, tag);
                })
            },
            function(tag, cb){
                TransactionModel.removeTagById(data._id, req.user._id, cb);
            }
        ], function(err){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }

            res.send({});
            next();
        })

    },
    get: function(req, res, next){
        TagModel.find({
            userId: req.user._id,
            isDeleted: false
        },{
            tagName: true,
            _id: true
        }, function(err, tags){
            if(err){
                logger.error(err);
                return next(new HttpError(400, "Server error"));
            }
            res.send(tags);
        });
    }
}
module.exports = controller;