define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    'storage'

], function(jQuery, Backbone, Marionette, App, config, async, storage){

    App.module("Service.Auth", {

        startWithParent: true,

        define: function( Auth, App, Backbone, Marionette, $, _ ){

            var Controller = Marionette.Controller.extend({

                initialize: function(){
                },

                logout: function(){
                    App.Database.removeDatabase().then(function(){
                        config.data.user.email = null;
                        storage.set(config.storage.user['email'], '');
                        storage.set(config.storage['lastUpdate'], 0);
                        storage.set(config.storage['isInitDatabase'], 0);
                        App.navigate("#landing", {trigger: true});
                    })
                }

            });

            App.on('initialize:before', function(){
                var controller = new Controller();

                App.reqres.setHandler(config.reqres['service:auth:logout'], controller.logout);

            })


        }
    })

})