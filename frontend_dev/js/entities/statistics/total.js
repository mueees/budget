define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    '../base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities.Statistic", {

        startWithParent: true,

        define: function( Statistic, App, Backbone, Marionette, $, _ ){

            var log;

            Statistic.Total = App.Entities.ClearModel.extend({

                url: config.api.statistic.total,

                idAttribute: '_id',

                defaults: {
                    period: []
                },

                validation: {},

                modelName: 'StatisticTotalModel',

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        period: model.period
                    };
                    var defaults = {
                        type: 'post',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });



            var API = {
                getModel: function(){
                    return new  Statistic.Total();
                }
            }

            App.reqres.setHandler(config.reqres['statistic:total:entity'], function(){
                return API.getModel();
            });

        }
    })


})