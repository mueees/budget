define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async'

], function(jQuery, Backbone, Marionette, App, config, async){

    App.module("Service.Db", {

        startWithParent: true,

        define: function( Db, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({

                initialize: function(){
                    _.bindAll(this, "updateTagsId",
                        "updateTransactionsId",
                        "updateTagIdInTransactions");
                },

                getChangingData: function(){
                    var def = $.Deferred();

                    $.when(
                        App.Database.TransactionCollection.getChangingData(),
                        App.Database.TagCollection.getChangingData()
                    )
                        .done(function(transactions, tags){
                            def.resolve({
                                transactions: transactions,
                                tags: tags
                            })
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                removeRemovedTransactions: function(){
                    var def = $.Deferred();
                    $.when(App.Database.TransactionModel.removeTransactions({
                        label: 'remove'
                    }))
                        .done(function(){
                            def.resolve();
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                updateTransactionsId: function(updateInfo){
                    var def = $.Deferred();
                    var _this = this;
                    if( !updateInfo ){
                        return def.resolve();
                    }

                    var methods = [];
                    _.each(updateInfo, function(data){
                        methods.push(function(callback){
                            $.when(_this.updateTransactionId(data))
                                .done(function(){callback(null)})
                                .fail(function(){callback(1)});
                        });
                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                updateTagsId: function(updateInfo){
                    var def = $.Deferred();
                    var _this = this;

                    if( !updateInfo ){
                        return def.resolve();
                    }

                    var methods = [];
                    _.each(updateInfo, function(data){
                        methods.push(function(callback){
                            $.when(_this.updateTagId(data))
                                .done(function(){callback(null)})
                                .fail(function(){callback(1)});
                        });
                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                updateTransactionId: function(data){
                    var def = $.Deferred();
                    $.when(App.Database.TransactionModel.findById(data.idBefore))
                        .then(function(transaction){
                            debugger
                            if(!transaction){
                                return def.resolve();
                            }
                            transaction.set({
                                _id: data.idActual,
                                label: null
                            });
                            $.when(transaction.saveTransaction())
                                .done(function(){
                                    def.resolve();
                                })
                                .fail(function(){
                                    def.reject();
                                })
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                removeRemovedTag: function(){
                    var def = $.Deferred();
                    $.when(App.Database.TagModel.removeTags({
                        label: 'remove'
                    }))
                        .done(function(){
                            def.resolve();
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                updateTagId: function(data){
                    var def = $.Deferred();
                    $.when(App.Database.TagModel.findById(data.idBefore))
                        .then(function(tag){
                            if(!tag){
                                return def.resolve();
                            }
                            tag.set({
                                _id: data.idActual,
                                label: null
                            });
                            $.when(tag.saveTag())
                                .done(function(){
                                    def.resolve();
                                })
                                .fail(function(){
                                    def.reject();
                                })
                        }).fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                updateTagIdInTransactions: function(updateInfo){
                    var def = $.Deferred();

                    $.when(App.Database.TransactionCollection.getAllTransactions())
                        .then(function(transactions){

                            var transactionToSave = [];

                            transactions.each( function(transaction){
                                var tags = transaction.get('tags');
                                var isChange = false;
                                _.each(updateInfo, function(oneTagUpdate){
                                    var index = $.inArray(oneTagUpdate.idBefore, tags);
                                    if( index != -1 ){
                                        isChange = true;
                                        tags.splice(index, 1, oneTagUpdate.idActual);
                                    }
                                })

                                if(isChange) transaction.set({
                                    tags: tags
                                });

                                transactionToSave.push(transaction);

                            })

                            var methods = [];
                            _.each(transactionToSave, function(transaction){
                                methods.push(function(callback){
                                    $.when(transaction.saveTransaction())
                                        .done(function(){callback(null)})
                                        .fail(function(){callback(1)});
                                });
                            });

                            async.parallel(methods, function(err){
                                if(err){
                                    return def.reject();
                                }
                                def.resolve();
                            });


                        })

                    return def.promise();
                }

            })

            App.on('initialize:before', function(){
                var controller = new Controller();

                App.reqres.setHandler(config.reqres['service:db:getChangingData'], controller.getChangingData);
                App.reqres.setHandler(config.reqres['service:db:updateTagsId'], controller.updateTagsId);
                App.reqres.setHandler(config.reqres['service:db:removeRemovedTag'], controller.removeRemovedTag);
                App.reqres.setHandler(config.reqres['service:db:updateTransactionsId'], controller.updateTransactionsId);
                App.reqres.setHandler(config.reqres['service:db:removeRemovedTransactions'], controller.removeRemovedTransactions);
                App.reqres.setHandler(config.reqres['service:db:updateTagIdInTransactions'], controller.updateTagIdInTransactions);

            })


        }
    })

})