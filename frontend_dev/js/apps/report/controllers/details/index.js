define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    "./views/Layout"
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report.Details", {

        startWithParent: false,

        define: function( Details, App, Backbone, Marionette, $, _ ){

            var log;

            Details.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Details"');

                    this.region = options.region;
                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.transactions = new App.Widget.Transaction.List.Controller({
                        region: this.layout.transaction
                    });
                    log('initialized');
                },

                show: function(){
                    this.transactions.show();
                    this.subscribe();
                    this.updateWidgets();
                },

                subscribe: function(){
                    this.listenTo( App.channels.main, config.channels['date:change'], this.updateWidgets );
                    this.listenTo( this.transactions, 'chooseTransaction', this.chooseTransactionHandler );
                },

                updateWidgets: function(){
                    var period = App.reqres.request(config.reqres['date:get:period']);
                    this.transactions.setData({
                        period: period
                    })
                },

                chooseTransactionHandler: function(transaction){
                    App.navigate('#transaction/edit/' + transaction.get('_id'), {trigger: true});
                },

                onClose: function(){}
            });
        }
    })

})