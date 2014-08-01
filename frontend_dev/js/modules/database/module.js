define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database;

        }
    })


})