var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , TransactionModel = require('models/transaction');

var controller = {
    create: function(req, res, next){
        var data = req.body;

        var transaction = new TransactionModel({
            userId: req.user._id,
            count: data.count,
            tags: data.tags
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
                        logger.error(err);
                        return cb("An error occurred. Please try again later");
                    }
                    cb(null, transaction);
                })
            }
        ], function(err, transaction){
            if(err){
                return next(new HttpError(400, err.errors));
            }

            res.send({
                _id: transaction._id
            });
        })

    },

    edit: function(req, res, next){},

    remove: function(req, res, next){},

    get: function(req, res, next){

    }
}
module.exports = controller;