var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , TransactionModel = require('models/transaction')
    , TagModel = require('models/tag');

var controller = {
    create: function(req, res, next){
        var data = req.body;

        var transaction = new TransactionModel({
            userId: req.user._id,
            count: data.count,
            tags: data.tags
        });

        if(data.data) transaction.date = data.date;

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
            next(transaction);
        })

    },

    edit: function(req, res, next){
        var data = req.body;

        TransactionModel.findById( data._id, function ( err, transaction ){
            if( data.count ) transaction.count = data.count;
            if( data.tags ) transaction.tags = data.tags;
            if( data.date ) transaction.date = data.date;
            transaction.updated_at = Date.now();

            transaction.save( function ( err, transaction, count ){
                if(err){
                    logger.error(err);
                    return next(new HttpError(400, err.errors));
                }

                res.send({
                    _id: transaction._id
                });
                next(transaction);
            });
        });
    },

    remove: function(req, res, next){
        var data = req.body;

        TransactionModel.deleteById(data._id, function(err, transaction){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }

            res.send({});
        })
    },

    get: function(req, res, next){
        var data = req.body;
        var period = data.period;
        var userId = req.user.id;
        var tags = data.tags || [];

        TransactionModel.getTransactions({
            period: period,
            userId: userId,
            tags: tags
        }, function(err, transactions){
            if(err){
                logger.error(err);
                return next(new HttpError(400, err.errors));
            }

            res.send(transactions);
        })


    },

    total: function(req, res, next){
        var data = req.body;

        TransactionModel.getTotals(data.period, req.user._id, function(err, total){
            if(err){
                logger.error(err);
                return next(new HttpError(400, "Server error."));
            }
            res.send({
                total: total
            });
        })
    },

    transactionList: function(req, res, next){
        var data = req.body;

        TransactionModel.getTransactionList( data.period, req.user._id, function(err, transactions){
            if(err) {
                logger.error(err);
                return next(new HttpError(400, "Server error."));
            }

            res.send({
                data: transactions
            });
        });

    },

    getById: function(req, res, next){
        var data = req.body;

        TransactionModel.getTransactionById(data._id, req.user._id, function(err, transaction){
            if(err){
                logger.error(err);
                return next(new HttpError(400, "Server error."));
            }

            if(!transaction){
                res.send({});
            }else{
                res.send({
                    _id: transaction._id,
                    tags: transaction.tags,
                    date: transaction.date,
                    count: transaction.count
                });
            }
        })

    },

    totalByTag: function(req, res, next){
        var data = req.body;

        async.parallel([
            function(cb){
                TransactionModel.getTotalsByTag( data.period, req.user._id, cb );
            },
            function(cb){
                TagModel.find({
                    userId: req.user._id
                }, function(err, tags){
                    if(err){
                        return cb(err)
                    }
                    cb(null, tags);
                });
            }
        ], function(err, results){
            if(err){
                if(err) {
                    logger.error(err);
                    return next(new HttpError(400, "Server error."));
                }
            }

            var result = [];
            var countByTags = results[0];
            var tags = results[1];
            _.each(countByTags, function(countByTag){
                var data = {
                    count: countByTag.count
                };
                if( countByTag._id.length ){
                    data.tagId = countByTag._id[0];

                    _.each(tags, function(tag){
                        if(tag._id+'' == data.tagId+'') {
                            data.tagName = tag.tagName;
                        }
                    })

                }

                result.push(data);
            })

            res.send({
                data: result
            });
            next(result);
        })
    }
}
module.exports = controller;