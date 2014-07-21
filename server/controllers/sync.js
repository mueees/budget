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
var TransactionControler = require('./sync/tag');

var controller = {
    clientServer: function(req, res, next){

        var tagController = new TagControler(req);
        var transactionController = new TransactionControler(req);

        async.waterfall([
            function(cb){
                tagController.sync(cb);
            }/*,
            transactionController.sync*/
        ], function(err){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }
            res.send();
            next();
        })
    },
    serverClient: function(req, res, next){}
}
module.exports = controller;