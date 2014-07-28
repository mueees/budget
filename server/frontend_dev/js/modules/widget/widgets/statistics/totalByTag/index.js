define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/TotalByTagView',

    '../../base/index'

], function(jQuery, Backbone, Marionette, App, config, TotalByTagView){

    App.module("Widget.TotalByTag", {

        startWithParent: true,

        define: function( TotalByTag, App, Backbone, Marionette, $, _ ){
            var log;

            TotalByTag.Controller = App.Widget.Base.Controller.extend({

                widgetName: 'Statistics by tags',

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