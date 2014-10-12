define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './services/db',
    './services/auth'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Service", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

})