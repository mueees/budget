define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/ListView',

    'widgetBase/index'

], function(jQuery, Backbone, Marionette, App, config, ListView){

    App.module("Widget.Transaction.List", {

        startWithParent: true,

        define: function( List, App, Backbone, Marionette, $, _ ){
            var log;

            List.Controller = App.Widget.Base.Controller.extend({

                widgetName: 'List of transactions',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Transaction.List');
                    App.Widget.Base.Controller.prototype.initialize.apply(this, arguments);
                    log('Initialized');
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['statistic:transactionList:entity']);
                },

                getView: function(){
                    return ListView;
                },

                subscribe: function(){
                    this.listenTo(this.view, 'chooseTransaction', this.chooseTransactionHandler);
                },

                chooseTransactionHandler: function(transaction){
                    this.trigger('chooseTransaction', transaction);
                }
            });

        }
    })

})