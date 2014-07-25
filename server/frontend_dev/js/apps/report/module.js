define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report", {

        startWithParent: false,

        define: function( Report, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){

                },

                onClose: function(){
                }
            });

            var API  = {

                report: function(){

                    if( !config.data.user.email ){
                        App.navigate('#landing', {trigger: true});
                    }

                    Report.controller.start();
                },

                /*Инициализация перед стартом*/
                start: function(){
                    Report.controller = new Controller({
                        region: App.content
                    });
                    App.execute(config.commands['main:enable']);
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Report.controller) {
                        log('delete controller');
                        Report.controller.close();
                        delete Report.controller;
                    }
                }
            }

            Report.start = API.start;
            Report.stop = API.stop;
            Report.report = API.report;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Report');
            })
        }
    })


})