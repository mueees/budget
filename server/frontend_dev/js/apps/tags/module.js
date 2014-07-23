define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Tags", {

        startWithParent: false,

        define: function( Tags, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                },

                onClose: function(){
                }
            });

            var API  = {

                tags: function(){

                    if( !config.data.user.email ){
                        App.navigate('#landing', {trigger: true});
                    }

                    Tags.controller.start();
                },

                /*Инициализация перед стартом*/
                start: function(){
                    Tags.controller = new Controller({
                        region: App.body
                    });
                    App.execute(config.commands['main:enable']);
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Tags.controller) {
                        log('delete controller');
                        Tags.controller.close();
                        delete Tags.controller;
                    }
                }
            }

            Tags.start = API.start;
            Tags.stop = API.stop;
            Tags.tags = API.tags;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Tags');
            })
        }
    })


})