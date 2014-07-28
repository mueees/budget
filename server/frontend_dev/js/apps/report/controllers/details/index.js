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

                    debugger
                    this.transactions = new App.Widget.Transaction.List.Controller();
                    log('initialized');
                },

                show: function(){
                    this.transactions.show();
                    this.subscribe();
                },

                subscribe: function(){
                    //this.listenTo( App.channels.main, config.channels['date:change'], this.updateWidgets );
                },

                updateWidgets: function(){
                    var period = App.reqres.request(config.reqres['date:get:period']);
                },

                onClose: function(){}
            });
        }
    })

})