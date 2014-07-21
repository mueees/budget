define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Log", {

        startWithParent: false,

        define: function( Log, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({});

            var API  = {
                start: function(){Controller.start()}
            }

            Log.API = API;

            App.addInitializer(function(){});
        }
    })


})