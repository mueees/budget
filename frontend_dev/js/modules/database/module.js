define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    './entities/base',
    './entities/tag',
    'idb'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){}
    })


})