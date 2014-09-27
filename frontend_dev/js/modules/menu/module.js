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

                    _.bindAll(this, "resizeHandler");
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
                    this.listenTo(this.model, "sync", function(){
                        App.channels.main.trigger(config.channels['sync']);
                    });
                    this.listenTo(this.model, "change:path", this.pathHandler);
                    this.listenTo(this.model, "change:isOpen", this.isOpenHandler);
                    $(window).on('resize', this.resizeHandler);
                },

                resizeHandler: function(){
                    this.model.set({
                        isOpen: false
                    })
                },

                isOpenHandler: function(){
                    var isOpen = this.model.get('isOpen');
                    if(isOpen){
                        this.region.$el.addClass('active');
                    }else{
                        this.region.$el.removeClass('active');
                    }
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
                },

                openMenu: function(){
                    this.model.set({
                        isOpen: true
                    })
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
            App.commands.setHandler(config.commands['menu:open'], function(path, options){
                Menu.controller.openMenu();
            })
            App.commands.setHandler(config.commands['menu:unselect'], function(){
                Menu.controller.unselectMenu();
            })



        }
    })


})