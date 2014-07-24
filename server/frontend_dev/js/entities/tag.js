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

            Entities.TagModel = Entities.ClearModel.extend({

                urls: {
                    create: config.api.tagCreate
                },

                idAttribute: '_id',

                defaults: {
                    tagName: ""
                },

                validation: {},

                modelName: 'TagModel',

                createTag: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        tagName: model.tagName
                    };

                    var defaults = {
                        url: this.urls.create,
                        type: 'post',
                        data: JSON.stringify(data)
                    };
                    options = _.extend(defaults, options);
                    return this.save(null, options);
                },

                editTag: function(options){},
                removeTag: function(options){}

            });
            Entities.TagCollections = Backbone.Collection.extend({
                model: Entities.TagModel,
                url: config.api.tagGet
            })

            var API = {
                getTagModel: function(){
                    return new Entities.TagModel();
                },

                getTagCollection: function(){
                    return new Entities.TagCollections();
                }
            }

            Entities.addInitializer(function(){
                log = App.reqres.request("getLog", 'Entities.Tag');
                log("Initialized");
            })

            App.reqres.setHandler(config.reqres['tag:entity'], function(){
                return API.getTagModel();
            });

            App.reqres.setHandler(config.reqres['tag:collection:entity'], function(){
                return API.getTagCollection();
            });
        }
    })


})