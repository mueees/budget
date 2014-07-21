define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'raven'
], function($, _, Backbone, Marionette, App, config){

    App.module("Entities", {

        startWithParent: true,

        define: function( Entities, App, Backbone, Marionette, $, _ ){

            var log;

            Entities.ClearModel = Backbone.Model.extend({
                initialize: function(attributes, options) {
                    options || (options = {});
                    this.bind("error", this.defaultErrorHandler);
                    Backbone.Model.prototype.initialize.apply(this, arguments);
                },

                defaultErrorHandler: function(model, error) {
                    var options = {
                        tags: {
                            modelName: this.modelName || "defaultModelName"
                        }
                    }

                    switch (error.status){
                        case 401:
                            App.execute(config.commands["raven:send:message"], '401', options);
                            break;
                        case 403:
                            App.execute(config.commands["raven:send:message"], '403', options);
                            break;
                        case 404:
                            App.execute(config.commands["raven:send:message"], '404', options);
                            break;
                        case 500:
                            App.execute(config.commands["raven:send:message"], '500', options);
                            break;
                    }
                }
            });
            Entities.ClearCollection = Backbone.Collection.extend({
                model: Entities.ClearModel
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