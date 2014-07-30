define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './behavior/Calculator',
    './behavior/Comment'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Behaviors", {

        startWithParent: true,

        define: function( Behaviors, App, Backbone, Marionette, $, _ ){}
    })


})