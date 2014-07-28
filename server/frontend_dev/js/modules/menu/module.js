define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*views*/
    './views/MenuView'
], function(jQuery, Backbone, Marionette, App, config, MenuView){

    App.module("Menu", {

        startWithParent: true,

        define: function( Menu, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.model = App.reqres.request(config.reqres['model:entity']);

                    this.view = new MenuView({
                        model: this.model
                    });
                    this.region.show(this.view);

                    this.subscribe();

                },

                subscribe: function(){
                    this.listenTo(this.model, "change:path", this.pathHandler);
                },

                pathHandler: function(){
                    var path = this.model.get('path');

                    if( path == "logout" ){
                        App.redirect( config.api.logout );
                    }else{
                        App.navigate('#' + path, {trigger: true});
                    }

                },

                setMenu: function(path, options){
                    this.model.set({
                        path: path
                    }, {silent: true})

                    this.view.pathHandler();
                },

                unselectMenu: function(){
                    this.model.set({
                        path: false
                    }, {silent: true});
                    this.view.pathHandler();
                }
            });

            var API  = {

                /* Инициализация перед стартом */
                start: function(){
                    if( Menu.controller ) return false;

                    Menu.controller = new Controller({
                        region: App.menu
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

            Menu.API = API;

            App.addInitializer(function(){

            })

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Menu');
            })

            App.commands.setHandler(config.commands['menu:set'], function(path, options){
                Menu.controller.setMenu(path, options);
            })
            App.commands.setHandler(config.commands['menu:unselect'], function(){
                Menu.controller.unselectMenu();
            })
        }
    })


})