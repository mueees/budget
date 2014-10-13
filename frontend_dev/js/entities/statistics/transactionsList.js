define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    '../base',
    '../transaction'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities.Statistic", {

        startWithParent: true,

        define: function( Statistic, App, Backbone, Marionette, $, _ ){

            var log;

            Statistic.TransactionsList = App.Entities.ClearModel.extend({

                url: config.api.statistic.listTransactions,

                defaults: {
                    period: [],
                    data: []
                },

                validation: {},

                modelName: 'TransactionsListModel',

                parse: function(response){
                    if( response && response.data ){
                        debugger

                        _.map(response.data, function(transaction){
                            transaction.date = new Date(transaction.date);
                        })

                        response.data = new App.Entities.TransactionCollections(response.data);
                    }

                    return response;
                },

                getData: function(options){
                    options = options || {};
                    var model =  this.toJSON();

                    var data = {
                        period: model.period
                    };
                    var defaults = {
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.fetch(options);
                    return this.xhr;
                }

            });

            var API = {
                getModel: function(){
                    return new  Statistic.TransactionsList();
                }
            }

            App.reqres.setHandler(config.reqres['statistic:transactionList:entity'], function(){
                return API.getModel();
            });

        }
    })


})