define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Routes", {

        startWithParent: true,

        define: function( Routes, App, Backbone, Marionette, $, _ ){

            var Router = Marionette.AppRouter.extend({

                before: function(){},

                appRoutes: {
                    "landing(?:querypath)": "landing",
                    "tags(?:querypath)": "tags",
                    "report(/:tabName)(?:querypath)": "report",
                    "(?:querypath)": "redirectToLanding",
                    "*any": "redirectToLanding"
                }

            })

            var Controller = Marionette.Controller.extend({
                initialize: function(options){},

                landing: function(){
                    App.startSubApp("Landing");
                    App.currentApp.landing();
                },

                report: function(tabname){
                    App.startSubApp("Report");
                    App.currentApp.report(tabname);
                },

                tags: function(){
                    App.startSubApp("Tags");
                    App.currentApp.tags();
                },

                redirectToLanding: function(){
                    App.navigate('#landing', {trigger: true});
                }
            });

            App.addInitializer(function(){
                new Router({controller: new Controller()})
            })
        }
    })


})