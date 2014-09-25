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
                    create: config.api.tagCreate,
                    remove: config.api.tagRemove,
                    edit: config.api.tagEdit
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
                    this.xhr = this.save(null, options);
                    return this.xhr;
                },

                saveTag: function(options){
                    options = options || {};
                    var model = this.toJSON();
                    var attrs = null;

                    if(options.data) {
                        model = _.extend(model, options.data);
                        delete options.data;
                    }

                    var data = {
                        _id: model._id,
                        tagName: model.tagName
                    };

                    var defaults = {
                        url: this.urls.edit,
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);

                    if( options.wait ){
                        attrs = data;
                        options.attrs = attrs;
                        delete options.data;
                    }

                    this.xhr = this.save(attrs, options);
                    return this.xhr;
                },
                removeTag: function(options){
                    options = options || {};
                    var model =  this.toJSON();
                    var data = {
                        _id: model._id
                    };

                    var defaults = {
                        url: this.urls.remove,
                        type: 'POST',
                        data: JSON.stringify(data)
                    };

                    options = _.extend(defaults, options);
                    this.xhr = this.destroy(options);
                    return this.xhr;
                }

            });
            Entities.TagCollections = Entities.ClearCollection.extend({
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