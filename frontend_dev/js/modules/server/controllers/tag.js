define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'idb',
    './base',
    'modules/database/module'
], function(jQuery, Backbone, Marionette, App, config, IDBStore){

    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.TagController = Server.BaseController.extend({

                initialize: function(){
                    Server.BaseController.prototype.initialize.apply(this, arguments);
                },

                create: function(){
                    var _this = this;
                    var tag = new App.Database.TagModel({
                        tagName: this.data.tagName
                    });

                    $.when(tag.saveTag()).done(function(){
                        _this.def.resolve({
                            _id: tag.get('_id')
                        });
                    })
                },

                edit: function(){
                    var _this = this;
                    var newTagName = this.data.tagName;

                    $.when(App.Database.TagModel.findById(this.data._id)).done(function(tag){
                        if(!tag){
                            _this.def.reject('Cannot find tag');
                            return false;
                        }else{
                            tag.set({
                                tagName: newTagName
                            });

                            $.when(tag.saveTag()).done( function(){
                                _this.def.resolve();
                            }).fail(function(){
                                    _this.def.reject('Cannot update tag. Server error.');
                                });
                        }
                    })
                },

                remove: function(){
                    var _this = this;
                    $.when(App.Database.TagModel.removeById(this.data._id)).done(function(){
                        _this.def.resolve();
                    }).fail(function(){
                            _this.def.reject('Cannot delete tag. Server error.');
                        })
                },

                get: function(){
                    var _this = this;
                    var tag = new App.Database.TagModel({
                        tagName: (new Date()).getTime()
                    });

                    var tagsCollection = new App.Database.TagCollection();
                    $.when(tagsCollection.getTags()).done(function(tags){
                        _this.def.resolve(tags.toJSON());
                    })

                }
            });
        }
    })


})