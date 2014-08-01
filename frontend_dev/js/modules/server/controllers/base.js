define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.BaseController = Marionette.Controller.extend({
                initialize: function(options){
                    this.context = options.context;
                    this.def = options.def;
                    this.data = {};
                    if(this.context.data) this.data = JSON.parse(this.context.data);
                }
            });
        }
    })


})