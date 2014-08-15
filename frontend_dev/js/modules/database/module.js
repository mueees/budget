define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    './entities/base',
    './entities/tag',
    './entities/transaction',
    'idb'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){}
    })


})