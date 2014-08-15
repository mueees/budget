define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'idb',
    './base',
    'modules/database/module'
], function(jQuery, Backbone, Marionette, App, config, IDBStore){

    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.TransactionController = Server.BaseController.extend({

                initialize: function(){
                    Server.BaseController.prototype.initialize.apply(this, arguments);
                },

                create: function(){
                    var _this = this;
                    var transaction = new App.Database.TransactionModel({
                        count: this.data.count || 0,
                        date: new Date(this.data.date),
                        comment: this.data.comment || "",
                        tags: this.data.tags || []
                    });

                    $.when(transaction.saveTransaction()).done(function(){
                        _this.def.resolve({
                            _id: transaction.get('_id')
                        });
                    })
                },

                transactionList: function(){
                    var _this = this;
                    $.when(
                            (new App.Database.TransactionCollection()).getTransactionList(this.data.period),
                            (new App.Database.TagCollection()).getTags()
                        ).done(function(transactions, tags){

                            var result = [];

                            _.each(transactions, function(transaction){
                                var resultTags = [];
                                _.each(transaction.get('tags'), function(transactionTagId){
                                    var result = {
                                        id: transactionTagId + ''
                                    };
                                    tags.each(function(tag){
                                        if(tag.get('_id')+'' == transactionTagId+'') {
                                            result.tagName = tag.get('tagName');
                                        }
                                    })
                                    resultTags.push(result);
                                })
                                transaction.set('tags', resultTags);
                                result.push(transaction.toJSON());
                            })

                            _this.def.resolve({
                                data: result
                            });
                        }).fail(function(){
                            _this.def.reject();
                        });
                },

                transactionList1: function(req, res, next){
                    var data = req.body;

                    async.parallel([
                        function(cb){
                            TransactionModel.getTransactionList( data.period, req.user._id, function(err, transactions){
                                if(err) {
                                    return cb(err);
                                }

                                cb(null, transactions);
                            });
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
                            logger.error(err);
                            return next(new HttpError(400, "Server error."));
                        }

                        var result = [];
                        var transactions = results[0];
                        var tags = results[1];

                        _.each(transactions, function(transaction){
                            var resultTags = [];
                            _.each(transaction.tags, function(transactionTagId){
                                var result = {
                                    id: transactionTagId + ''
                                };
                                _.each(tags, function(tag){
                                    if(tag._id+'' == transactionTagId+'') {
                                        result.tagName = tag.tagName;
                                    }
                                })
                                resultTags.push(result);
                            })
                            transaction.tags = resultTags;

                            result.push(transaction);
                        })

                        res.send({
                            data: result
                        });
                    })

                }
            });
        }
    })


})