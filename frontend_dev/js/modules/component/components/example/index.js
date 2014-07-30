define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/TabTemp.html'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.Tab", {

        startWithParent: true,

        define: function( Tab, App, Backbone, Marionette, $, _ ){
            var log;

            Tab.View = Marionette.ItemView.extend({

                initialize: function(options){

                },

                template: _.template(template),

                onShow: function(){}

            });

        }
    })

})