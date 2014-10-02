var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , TagModel = require('models/tag')
    , TransactionModel = require('models/transaction');


var TagControler = require('./sync/tag');
var TransactionControler = require('./sync/transaction');

var controller = {
    clientServer: function(req, res, next){

        var tagController = new TagControler(req.body.tags, req.user._id);
        var transactionController = new TransactionControler(req.body.transactions, req.user._id);

        async.waterfall([
            function(cb){
                tagController.sync(function(err){
                    if(err) {
                        return cb(err);
                    }

                    var createdTagId = tagController.getCreatedId();
                    if( createdTagId.length ){
                        transactionController.updateTagsId(createdTagId);
                    }

                    cb(null);

                });
            },
            function(cb){
                transactionController.sync(cb);
            }
        ], function(err){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }

            res.send({
                newTagId: tagController.getCreatedId(),
                newTransactionId: transactionController.getCreatedId()
            });
        })
    },
    serverClient: function(req, res, next){
        var lastUpdate = req.body.lastUpdate;
        if(!lastUpdate) lastUpdate = 0;

        async.parallel([
            function(callback){
                TagModel.getLatestTags(lastUpdate, callback);
            },
            function(callback){
                TransactionModel.getLatestTransactions(lastUpdate, callback);
            }
        ], function(err, data){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }

            res.send({
                tags: data[0] || [],
                transactions: data[1] || []
            });
        })



    }
}
module.exports = controller;