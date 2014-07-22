define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Landing", {

        startWithParent: false,

        define: function( Landing, App, Backbone, Marionette, $, _ ){

            var log;
            var Router = Marionette.AppRouter.extend({

                before: function(){
                    App.startSubApp( "Landing", {} );
                },

                appRoutes: {
                    "landing(?:querypath)": "routeStart",
                    "(?:querypath)": "redirectToLanding",
                    "*any": "redirectToLanding"
                }

            })

            var Controller = Marionette.Controller.extend({
                start: function(){}
            });

            var API  = {

                routeStart: function(){
                    Landing.controller.start();
                },

                redirectToLanding: function(){
                    App.navigate('#landing', {trigger: true});
                },

                /*Инициализация перед стартом*/
                start: function(){
                    Landing.controller = new Controller({
                        region: App.main
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Landing.controller) {
                        log('delete controller');
                        Landing.controller.close();
                        delete Landing.controller;
                    }
                }
            }

            Landing.start = API.start;
            Landing.stop = API.stop;

            App.addInitializer(function(){
                log('Initialize Router');
                new Router({controller: API})
            })

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Landing');
            })
        }
    })


})