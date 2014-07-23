define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Main", {

        startWithParent: false,

        define: function( Main, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                    this.init = false;
                },

                enable: function(){

                    if(this.init) return false;
                    this.init = true;

                    this.layout = new Layout();
                    App.body.show(this.layout);

                    App.addRegions({
                        header: ".header-container"
                    });

                    App.module('Header').API.start();
                },

                disable: function(){

                    if(!this.init) return false;
                    this.init = false;

                    if(this.layout) this.layout.close();

                    App.removeRegion('header');
                    App.module('Header').API.stop();
                }
            });

            App.addInitializer(function(){
                var controller = new Controller();

                App.commands.setHandler(config.commands['main:enable'], function( options ){
                    return controller.enable();
                })

                App.commands.setHandler(config.commands['main:disable'], function( options ){
                    return controller.disable();
                })

            })

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Main');
            })
        }
    })


})