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
                                transactions: transactions.toJSON() || [],
                                tags: tags.toJSON() || []
                            })
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                //update transactions info

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

                updateTransactionId: function(data){
                    var def = $.Deferred();
                    $.when(App.Database.TransactionModel.findById(data.idBefore))
                        .then(function(transaction){
                            if(!transaction){
                                return def.resolve();
                            }
                            transaction.set({
                                _id: data.idActual,
                                _idBefore: data.idBefore,
                                label: ''
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

                resetTransactionEditLabel: function(){
                    var def = $.Deferred();

                    $.when(App.Database.TransactionCollection.resetEditLabel())
                        .done(function(){
                            def.resolve();
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
                                _.each(updateInfo, function(oneTagUpdate){
                                    if( oneTagUpdate.idBefore == tags ){
                                        transaction.set('tags', oneTagUpdate.idActual);
                                        transactionToSave.push(transaction);
                                    }
                                })
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

                        });

                    return def.promise();
                },

                //update tags info

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

                updateTagId: function(data){
                    var def = $.Deferred();
                    $.when(App.Database.TagModel.findById(data.idBefore))
                        .then(function(tag){
                            if(!tag){
                                return def.resolve();
                            }
                            tag.set({
                                _id: data.idActual,
                                _idBefore: data.idBefore,
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

                resetTagEditLabel: function(){
                    var def = $.Deferred();

                    $.when(App.Database.TagCollection.resetEditLabel())
                        .done(function(){
                            def.resolve();
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

                //api for server - client

                removeTagById: function(id){
                    var def = $.Deferred();

                    $.when(App.Database.TagModel.removeTags({_id: id}))
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                editOrCreateTag: function(tag){
                    var def = $.Deferred();

                    var tag = new App.Database.TagModel(tag);
                    $.when(tag.saveTag())
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });


                    return def.promise();
                },

                removeTransactionById: function(id){
                    var def = $.Deferred();

                    $.when(App.Database.TransactionModel.removeById(id))
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                editOrCreateTransaction: function(transaction){
                    var def = $.Deferred();
                    delete transaction.isDeleted;
                    var transaction = new App.Database.TransactionModel(transaction);
                    $.when(transaction.saveTransaction())
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });


                    return def.promise();
                }

            });

            App.on('initialize:before', function(){
                var controller = new Controller();

                App.reqres.setHandler(config.reqres['service:db:removeTransactionById'], controller.removeTransactionById);
                App.reqres.setHandler(config.reqres['service:db:removeTagById'], controller.removeTagById);
                App.reqres.setHandler(config.reqres['service:db:editOrCreateTag'], controller.editOrCreateTag);
                App.reqres.setHandler(config.reqres['service:db:editOrCreateTransaction'], controller.editOrCreateTransaction);

                App.reqres.setHandler(config.reqres['service:db:getChangingData'], controller.getChangingData);
                App.reqres.setHandler(config.reqres['service:db:updateTagsId'], controller.updateTagsId);
                App.reqres.setHandler(config.reqres['service:db:resetTagEditLabel'], controller.resetTagEditLabel);
                App.reqres.setHandler(config.reqres['service:db:resetTransactionEditLabel'], controller.resetTransactionEditLabel);
                App.reqres.setHandler(config.reqres['service:db:removeRemovedTag'], controller.removeRemovedTag);
                App.reqres.setHandler(config.reqres['service:db:updateTransactionsId'], controller.updateTransactionsId);
                App.reqres.setHandler(config.reqres['service:db:removeRemovedTransactions'], controller.removeRemovedTransactions);
                App.reqres.setHandler(config.reqres['service:db:updateTagIdInTransactions'], controller.updateTagIdInTransactions);

            })


        }
    })

})