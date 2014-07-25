define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'


], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report.Header", {

        startWithParent: false,

        define: function( Header, App, Backbone, Marionette, $, _ ){

            var log;

            Header.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Header');
                    this.region = options.region;
                    this.tabName = options.tabName;

                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.tab = this.getTab();
                    this.layout.tab.show(this.tab);

                    this.dateFilter = this.getDateFilter();
                    this.dateFilter.show();

                },

                getTab: function(){
                    this.tabModel = App.reqres.request(config.reqres['model:entity']);
                    this.tabModel.set({
                        tabs: [
                            {
                                name: "main",
                                value: "main"
                            },
                            {
                                name: "details",
                                value: "details"
                            }
                        ],
                        currentTab: ( this.tabName ) ? this.tabName : false
                    })

                    return new App.Component.Tab.View({
                        model: this.tabModel
                    })
                },

                getDateFilter: function(){
                    return new App.Widget.DateFilter.Controller({
                        region: this.layout.filter
                    })
                },

                onClose: function(){
                    this.tab.close();
                    this.dateFilter.close();
                    this.layout.close();
                }

            });
        }
    })

})