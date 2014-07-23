define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/MainView'
], function(jQuery, Backbone, Marionette, App, config, MainView){

    App.module("Header", {

        startWithParent: true,

        define: function( Header, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.view = new MainView();
                    this.region.show(this.view);
                }
            });

            var API  = {

                /*Инициализация перед стартом*/
                start: function(){
                    if( Header.controller ) return false;

                    Header.controller = new Controller({
                        region: App.header
                    });
                    Header.controller.start();
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Header.controller) {
                        Header.controller.close();
                        delete Header.controller;
                    }
                }
            }

            Header.API = API;
        }
    })


})