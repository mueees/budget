define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*widgets*/

    //auth
    './widgets/auth/sign/index'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Widget", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

})