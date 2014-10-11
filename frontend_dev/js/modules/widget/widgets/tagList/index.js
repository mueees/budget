define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/ListView'

], function(jQuery, Backbone, Marionette, App, config, ListView){

    App.module("Widget.TagList", {

        startWithParent: true,

        define: function( TagList, App, Backbone, Marionette, $, _ ){
            var log;

            TagList.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    options = options || {};
                    this.region = options.region;
                    this.tags = App.reqres.request(config.reqres['tag:collection:entity']);
                    this.view = null;
                },

                show: function(){

                    var _this = this;
                    var def = $.Deferred();

                    $.when(this.tags.fetch()).done(function(){

                        _this.view = new ListView({
                            collection: _this.tags
                        });

                        _this.listenTo(_this.view, 'deleteProject', function(project){
                            _this.trigger('deleteProject', project);
                        });

                        _this.listenTo(_this.view, 'editProject', function(project){
                            _this.trigger('editProject', project);
                        });

                        _this.listenTo(_this.view, 'el:click', function(project){
                            _this.trigger('el:click', project);
                        });

                        _this.region.show(_this.view);

                        _this.subscribe();

                        def.resolve();
                    });

                    return def.promise();
                },

                subscribe: function(){
                    this.listenTo(this.view, "deleteTag", this.deleteTagHandler);
                    this.listenTo(this.view, "editTag", this.editTagHandler);
                },

                deleteTagHandler: function(tag){
                    var notice = App.reqres.request(config.reqres["notice:get"], {
                        title: "Delete tag",
                        text: "Do you want delete '" + tag.get('tagName') +"' tag?",
                        textPrimary: "Delete",
                        isCloseAuto: true
                    });

                    App.modal.show(notice);

                    this.listenToOnce(notice, "accept", function(){
                        tag.removeTag({
                            success: function(){
                                tag.trigger('destroy');
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Tag was removed.'});
                            },
                            error: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Cannot delete tag. Server error.', type: "error"});
                            }
                        })
                    })
                },
                editTagHandler: function(tag){
                    var notice = App.reqres.request(config.reqres["notice:get:prompt"], {
                        title: "Rename tag",
                        placeholder: "Enter new tag name",
                        textPrimary: "Edit",
                        isCloseAuto: true
                    });

                    App.modal.show(notice);

                    this.listenToOnce(notice, "accept", function(){

                        if(!notice.value.length){
                            App.execute(config.commands['notify:showNotify:side'], {text: 'Name is required.', type: "error"});
                            return false;
                        }

                        tag.set({
                            tagName: notice.value
                        });

                        tag.saveTag({
                            success: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Tag was saved.'});
                            },
                            error: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Cannot save tag. Server error.', type: "error"});
                            }
                        })
                    })
                },

                addTag: function(tag){
                    if(!tag) return false;
                    this.tags.add(tag);
                }
            });

        }
    })

})