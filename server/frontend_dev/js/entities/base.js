define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.ClearModel = Backbone.Model.extend({
                initialize: function(attributes, options) {
                    options || (options = {});
                    this.bind("error", this.defaultErrorHandler);
                    this.bind("request", this.requestHandler);
                    Backbone.Model.prototype.initialize.apply(this, arguments);
                },

                fetch: function(){
                    this.xhr = Backbone.Model.prototype.fetch.apply(this, arguments);
                },

                requestHandler: function(){
                    if( this.xhr ){
                        this.abortAjax();
                    }
                },

                defaultErrorHandler: function(model, error) {
                    var options = {
                        tags: {
                            modelName: this.modelName || "defaultModelName"
                        }
                    }
                },

                xhr: null,

                abortAjax: function(){
                    if( this.xhr ){
                        this.xhr.abort();
                        this.xhr = null;
                    }
                }

            });
            Entities.ClearCollection = Backbone.Collection.extend({

                model: Entities.ClearModel,

                xhr: null,

                fetch: function(){
                    this.xhr = Backbone.Collection.prototype.fetch.apply(this, arguments);
                },

                initialize: function(attributes, options) {
                    options || (options = {});
                    this.bind("request", this.requestHandler);
                    Backbone.Model.prototype.initialize.apply(this, arguments);
                },

                requestHandler: function(){
                    if( this.xhr ){
                        this.abortAjax();
                    }
                },

                abortAjax: function(){
                    if( this.xhr ){
                        this.xhr.abort();
                        this.xhr = null;
                    }
                }
            });

            var API = {
                getModelEntity: function(){
                    return new Entities.ClearModel();
                },
                getCollectionEntity: function(){
                    return new Entities.ClearCollection();
                }
            }

            Entities.API = API;

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.Base');
                log("Initialised");
            })

            App.reqres.setHandler(config.reqres['model:entity'], function(){
                return API.getModelEntity();
            });
            App.reqres.setHandler(config.reqres['collection:entity'], function(){
                return API.getCollectionEntity();
            });
        }
    })


})