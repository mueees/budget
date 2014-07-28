define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/TotalByTagView',

    '../../base/index'

], function(jQuery, Backbone, Marionette, App, config, TotalByTagView){

    App.module("Widget.TotalByTagChart", {

        startWithParent: true,

        define: function( TotalByTagChart, App, Backbone, Marionette, $, _ ){
            var log;

            TotalByTagChart.Controller = App.Widget.Base.Controller.extend({

                widgetName: 'Statistics chart',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');
                    App.Widget.Base.Controller.prototype.initialize.apply(this, arguments);
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['statistic:totalByTag:entity']);
                },

                getView: function(){
                    return TotalByTagView;
                }

            });

        }
    })

})