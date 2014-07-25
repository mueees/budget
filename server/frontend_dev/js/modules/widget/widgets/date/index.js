define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'moment'

], function(jQuery, Backbone, Marionette, App, config, moment){

    App.module("Widget.DateFilter", {

        startWithParent: true,

        define: function( DateFilter, App, Backbone, Marionette, $, _ ){
            var log;

            DateFilter.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');

                    _.bindAll(this, "getPeriod");

                    this.region = options.region;

                    this.filterModel = App.reqres.request(config.reqres['model:entity']);
                    this.filterModel.set({
                        date: new Date()
                    });

                    this.view =  new App.Component.DateFilter.View({
                        model: this.filterModel
                    });

                    this._initAppReqres();
                    this.subscribe();
                    log('Initialized');
                },

                subscribe: function(){
                    this.listenTo(this.filterModel, "change:date", this.dateHandler);
                },

                dateHandler: function(){
                    App.channels.main.trigger(config.channels['date:change'], this.getPeriod);
                },

                show: function(){
                    this.region.show(this.view);
                },

                _initAppReqres: function(){
                    App.reqres.setHandler(config.reqres['date:get:period'], this.getPeriod);
                },

                getPeriod: function(){
                    var format = 'YYYY-MM-DD';

                    var date = this.filterModel.get('date'),
                        result = {};
                    date = new Date( date.getTime() );

                    date.setDate(1);
                    result.start = moment(date).format(format);

                    date.setMonth( date.getMonth() + 1);
                    date.setDate(0);
                    result.end = moment(date).format(format);

                    return result;

                }

            });

        }
    })

})