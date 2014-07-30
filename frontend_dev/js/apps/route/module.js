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
                    "transaction/add(?:querypath)": "transactionAdd",
                    "transaction/edit/:id(?:querypath)": "transactionEdit",
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
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }

                    App.startSubApp("Report");
                    App.currentApp.report(tabname);
                },

                tags: function(){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }
                    App.startSubApp("Tags");
                    App.currentApp.tags();
                },

                transactionAdd: function(){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }
                    App.startSubApp("Transaction");
                    App.currentApp.add();
                },

                transactionEdit: function(id){
                    if( !config.data.user.email ){
                        this.redirectToLanding();
                        return false;
                    }
                    App.startSubApp("Transaction");
                    App.currentApp.edit(id);
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