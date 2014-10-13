define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server',
    'storage',

    /*controllers*/
    './controllers/tag',
    './controllers/transaction'
], function(jQuery, Backbone, Marionette, App, config, server, storage){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.server = options.server;

                    this.initRouting();
                },

                initRouting: function(){
                    this.server.addRoutes({
                        //tags
                        createTag: {
                            urlExp: config.api.tagCreate,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).create();
                                return def.promise();
                            }
                        },
                        getTag: {
                            urlExp: config.api.tagGet,
                            httpMethod: "GET",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).get();
                                return def.promise();
                            }
                        },
                        editTag: {
                            urlExp: config.api.tagEdit,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).edit();
                                return def.promise();
                            }
                        },
                        removeTag: {
                            urlExp: config.api.tagRemove,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).remove();
                                return def.promise();
                            }
                        },

                        //transaction
                        createTransaction: {
                            urlExp: config.api.transactionCreate,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).create();
                                return def.promise();
                            }
                        },
                        editTransaction: {
                            urlExp: config.api.transactionEdit,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).edit();
                                return def.promise();
                            }
                        },
                        removeTransaction: {
                            urlExp: config.api.transactionRemove,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).remove();
                                return def.promise();
                            }
                        },
                        getTransactionData: {
                            urlExp: config.api.transactionGetById,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).getById();
                                return def.promise();
                            }
                        },

                        getTransactionList: {
                            urlExp: config.api.statistic.listTransactions,
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).transactionList();
                                return def.promise();
                            }
                        }
                    });
                }
            });

            App.on('initialize:before', function(){
                if(!storage.get(config.storage['isInitDatabase'])){
                    $.when(App.Database.initDatabase()).then(function(){
                        new Controller({
                            server: server
                        });
                        storage.set(config.storage['isInitDatabase'], true);
                    });
                }else{
                    new Controller({
                        server: server
                    });
                }
            })
        }
    })


})