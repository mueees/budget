define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'storage',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, storage, Layout){

    App.module("Landing", {

        startWithParent: false,

        define: function( Landing, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },
                start: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);

                    this.signWidget = new App.Widget.Sign.Controller({
                        region: this.layout.sign
                    });
                    this.signWidget.show();

                    this.listenTo(this.signWidget, "signUp", this.signUpHandler);
                    this.listenTo(this.signWidget, "signIn", this.signInHandler);
                },

                initDb: function(){
                    if(!storage.get(config.storage['isInitDatabase'])){
                        $.when(App.Database.initDatabase()).then(function(){
                            storage.set(config.storage['isInitDatabase'], true);
                        });
                    }
                },

                signUpHandler: function(user){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Please verify your email.'});
                },

                signInHandler: function(user){
                    config.data.user.email = user.get('email');
                    storage.set(config.storage.user['email'], user.get('email'));

                    this.initDb();

                    App.navigate('#report/main', {trigger: true});
                    setTimeout(function(){
                        App.execute(config.commands['notify:showNotify:side'], {text: 'Welcome to account.'});
                    }, 200);
                },

                onClose: function(){
                    if(this.signWidget) this.signWidget.close();
                    if(this.layout) this.layout.close();
                }

            });

            var API  = {

                landing: function(){
                    if( config.data.user.email ){
                        App.navigate('#report', {trigger: true});
                        return;
                    }

                    Landing.controller.start();
                },

                /*Инициализация перед стартом*/
                start: function(){
                    Landing.controller = new Controller({
                        region: App.body
                    });

                    App.execute(config.commands['main:disable']);
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Landing.controller) {
                        log('delete controller');
                        Landing.controller.close();
                        delete Landing.controller;
                    }
                }
            }

            Landing.start = API.start;
            Landing.stop = API.stop;
            Landing.landing = API.landing;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Landing');
            })
        }
    })


})