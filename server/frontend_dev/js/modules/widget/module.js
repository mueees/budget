define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Map", {

        startWithParent: false,

        define: function( Map, App, Backbone, Marionette, $, _ ){

            var log;
            var Router = Marionette.AppRouter.extend({

                before: function(){
                    App.startSubApp( "Map", {} );
                },

                appRoutes: {
                    "": "start"
                }

            })

            var Controller = Marionette.Controller.extend({});

            var API  = {
                start: function(){Controller.start()}
            }

            Map.API = API;

            App.addInitializer(function(){
                log = App.reqres.request("getLog", 'SidebarMenu');
                var controller = new Controller();
                new Router({
                    controller: API
                })
            })
        }
    })


})