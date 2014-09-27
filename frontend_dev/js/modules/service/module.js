define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './services/db'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Service", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

})