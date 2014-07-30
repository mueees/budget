define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/SignView'

], function(jQuery, Backbone, Marionette, App, config, SignView){

    App.module("Widget.Sign", {

        startWithParent: true,

        define: function( Sign, App, Backbone, Marionette, $, _ ){
            var log;

            Sign.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');
                    this.region = options.region;

                    this.user = App.reqres.request(config.reqres['user:entity']);
                    this.user.validation = {
                        email: {
                            required: true,
                            pattern: 'email'
                        },
                        password: {
                            required: true,
                            minLength: 5
                        }
                    }

                    this.view = new SignView({
                        model: this.user
                    })

                    this.listenTo(this.view, "signUp", function(){
                        this.view.resetForm();
                        this.trigger('signUp', this.user);
                    })

                    this.listenTo(this.view, "signIn", function(){
                        this.trigger('signIn', this.user);
                    })

                    log('Initialized');
                },

                show: function(){
                    this.region.show(this.view);
                }

            });

        }
    })

})