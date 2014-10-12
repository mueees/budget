define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    'storage'
], function(jQuery, Backbone, Marionette, App, config, async, storage){
    App.module("Initialize", {

        startWithParent: true,

        define: function( Initialize, App, Backbone, Marionette, $, _ ){

            App.on('initialize:before', function(){

                //THIS MODULE ENABLE ONLY FOR MOBILE CLIENT

                var emailFromLocalStorage = storage.get(config.storage.user['email']);
                if( emailFromLocalStorage && !config.data.user.email ) config.data.user.email = emailFromLocalStorage;

            })

        }
    })

})