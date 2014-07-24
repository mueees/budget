define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Menu", {

        startWithParent: false,

        define: function( Menu, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                start: function(){

                }
            });

            var API  = {

                /* Инициализация перед стартом */
                start: function(){
                    if( Menu.controller ) return false;

                    Menu.controller = new Controller({
                        region: App.header
                    });
                    Menu.controller.start();
                },

                /* Остановка модуля */
                stop: function(){
                    if(Menu.controller) {
                        Menu.controller.close();
                        delete Menu.controller;
                    }
                }
            }

            Menu.start = API.start;
            Menu.stop = API.stop;

            App.addInitializer(function(){})

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Menu');
            })
        }
    })


})