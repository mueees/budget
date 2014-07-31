define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server',

    /*controllers*/
    './controllers/tag'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.server = options.server;
                    this.db = options.db;

                    this.initRouting();
                },

                initRouting: function(){
                    //tag
                    this.server.addRoutes({
                        createTag: {
                            urlExp: "/api/tag/create",
                            httpMethod: "POST",
                            handler: function(context){
                                return (new Server.TagController(context)).create();
                            }
                        },
                        getTag: {
                            urlExp: "/api/tag/get",
                            httpMethod: "GET",
                            handler: function(context){
                                return (new Server.TagController(context)).get();
                            }
                        },
                        editTag: {
                            urlExp: "/api/tag/edit",
                            httpMethod: "POST",
                            handler: function(context){
                                return (new Server.TagController(context)).edit();
                            }
                        },
                        removeTag: {
                            urlExp: "/api/tag/remove",
                            httpMethod: "POST",
                            handler: function(context){
                                return (new Server.TagController(context)).remove();
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