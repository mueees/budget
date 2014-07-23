define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.UserModel = Entities.ClearModel.extend({

                urls: {
                    signup: config.api.signup,
                    signin: config.api.signin
                },

                defaults: {
                    email: "",
                    password: ""
                },

                validation: {},

                modelName: 'UserModel',

                signUp: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        password: model.password,
                        email: model.email
                    };

                    var defaults = {
                        url: this.urls.signup,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.save(null, options);
                },

                signIn: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        password: model.password,
                        email: model.email
                    };

                    var defaults = {
                        url: this.urls.signin,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    this.save(null, options);
                }

            })

            var API = {
                getUserModel: function(){
                    return new Entities.UserModel();
                }
            }

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.User');
                log("Initialized");
            })

            App.reqres.setHandler(config.reqres['user:entity'], function(){
                return API.getUserModel();
            });
        }
    })


})