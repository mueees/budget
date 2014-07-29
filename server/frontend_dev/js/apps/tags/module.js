define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Tags", {

        startWithParent: false,

        define: function( Tags, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.tagList = new App.Widget.TagList.Controller({
                        region: this.layout.list
                    });

                    App.execute(config.commands['notify:showNotify'], {text: 'Loading...'});

                    $.when(this.tagList.show()).done(
                        function(){
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    ).fail(
                        function(){
                            App.execute(config.commands['notify:showNotify:side'], {
                                text: 'Server error.',
                                type: 'error'
                            });
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    );

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.layout, "addNewTag", this.addNewTagHandler)
                },

                addNewTagHandler: function(tagName){
                    var tag = App.reqres.request(config.reqres['tag:entity']);
                    var _this = this;

                    if(!tagName) return false;

                    tag.set({
                        tagName: tagName
                    });

                    $.when(tag.createTag()).done(function(){
                        _this.tagList.addTag(tag);
                        _this.layout.resetForm();
                        App.execute(config.commands['notify:showNotify:side'], {text: 'Tag was added.'});
                    }).fail(function(){
                            App.execute(config.commands['notify:showNotify:side'], {
                                text: 'Create tag was failed. Server error.',
                                type: 'error'
                            });
                        })
                },

                onClose: function(){}
            });

            var API  = {

                tags: function(){

                    if( !config.data.user.email ){
                        App.navigate('#landing', {trigger: true});
                    }

                    App.execute(config.commands['menu:set'], 'tags');

                    Tags.controller.start();
                },

                /*Инициализация перед стартом*/
                start: function(){
                    App.execute(config.commands['main:enable']);
                    Tags.controller = new Controller({
                        region: App.content
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Tags.controller) {
                        log('delete controller');
                        Tags.controller.close();
                        delete Tags.controller;
                    }
                }
            }

            Tags.start = API.start;
            Tags.stop = API.stop;
            Tags.tags = API.tags;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Tags');
            })
        }
    })


})