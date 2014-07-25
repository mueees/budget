define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/NoDataTemp.html'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.NoData", {

        startWithParent: true,

        define: function( NoData, App, Backbone, Marionette, $, _ ){

            NoData.View = Marionette.ItemView.extend({

                className: "text",

                initialize: function(options){},

                template: _.template(template)

            });

        }
    })

})