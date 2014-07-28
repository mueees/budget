define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    "./views/Layout"
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report.Main", {

        startWithParent: false,

        define: function( Main, App, Backbone, Marionette, $, _ ){

            var log;

            Main.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Main"');

                    this.region = options.region;
                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.total = new App.Widget.Totals.Controller({
                        region: this.layout.total
                    })
                    this.totalByTag = new App.Widget.TotalByTag.Controller({
                        region: this.layout.table
                    })
                    log('initialized');
                },

                show: function(){
                    this.total.show();
                    this.totalByTag.show();
                    this.subscribe();
                    this.updateWidgets();
                },

                subscribe: function(){
                    this.listenTo( App.channels.main, config.channels['date:change'], this.updateWidgets );
                },

                updateWidgets: function(){
                    var period = App.reqres.request(config.reqres['date:get:period']);

                    this.total.setData({
                        period: period
                    });

                    this.totalByTag.setData({
                        period: period
                    });
                },

                onClose: function(){}
            });
        }
    })

})