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

                        setTimeout(function(){
                            def.resolve();
                        }, 3000)

                        return;

                        _this.view = new ListView({
                            collection: _this.projects
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

                        def.resolve();
                    });

                    return def.promise();
                },

                addTag: function(tag){
                    if(!tag) return false;
                    this.tags.add(tag);
                }
            });

        }
    })

})