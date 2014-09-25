define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server',

    /*controllers*/
    './controllers/tag',
    './controllers/transaction'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.server = options.server;
                    this.db = options.db;

                    /*this.server.setTransportFactory(function(){
                        debugger
                    })*/

                    this.initRouting();
                },

                initRouting: function(){
                    //tag
                    this.server.addRoutes({
                        //tags
                        createTag: {
                            urlExp: "/api/tag/create",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).create();
                                return def.promise();
                            }
                        },
                        getTag: {
                            urlExp: "/api/tag/get",
                            httpMethod: "GET",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).get();
                                return def.promise();
                            }
                        },
                        editTag: {
                            urlExp: "/api/tag/edit",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).edit();
                                return def.promise();
                            }
                        },
                        removeTag: {
                            urlExp: "/api/tag/remove",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TagController({context: context,def: def})).remove();
                                return def.promise();
                            }
                        },

                        //transaction
                        createTransaction: {
                            urlExp: "/api/transaction/create",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).create();
                                return def.promise();
                            }
                        },
                        editTransaction: {
                            urlExp: "/api/transaction/edit",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).edit();
                                return def.promise();
                            }
                        },
                        removeTransaction: {
                            urlExp: "/api/transaction/remove",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).remove();
                                return def.promise();
                            }
                        },
                        getTransactionData: {
                            urlExp: "/api/transaction/getById",
                            httpMethod: "POST",
                            handler: function(context){
                                var def = new $.Deferred();
                                (new Server.TransactionController({context: context,def: def})).getById();
                                return def.promise();
                            }
                        },

                        getTransactionList: {
                            urlExp: "/api/transaction/list",
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
                if( config.data.db == "local" ){
                    var controller = new Controller({
                        server: server,
                        db: config.data.db
                    });
                }else{
                    server.enable(false);
                }
            })
        }
    })


})