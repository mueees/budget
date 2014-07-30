define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*widgets*/

    //auth
    './components/dateFilter/index',
    './components/noData/index',
    './components/tab/index'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Component", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

})