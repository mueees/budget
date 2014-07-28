define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

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

                signUpHandler: function(user){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Please verify your email.'});
                },

                signInHandler: function(user){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Welcome to account.'});
                    setTimeout(function(){App.redirect('/')}, 800)
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