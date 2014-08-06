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
                create: function(){},
                get: function(){
                    var _this = this;
                    var Tag = App.Database.TagModel.extend({
                        getTags: function(){
                            var _this = this;
                            var def = new $.Deferred();
                            $.when(this.connect()).done(function(){
                                _this.db.getAll(function(data){
                                    def.resolve(data);
                                }, function(){debugger})
                            })
                            return def.promise();
                        },
                        saveRandomTag: function(){
                            var _this = this;
                            var def = new $.Deferred();
                            var tag = {tagName: 'Random tag' + (new Date()).getTime()};

                            $.when(this.connect()).done(function(){
                                _this.db.put(tag, function(){
                                    def.resolve(_this);
                                    console.log("RANDOM SAVE");
                                }, function(error){
                                    alert('put error');
                                })
                            })

                            return def.promise();
                        }
                    });
                    var tag = new Tag();

                    $.when(tag.saveRandomTag()).done(function(){

                        $.when(tag.getTags()).done(function(data){
                            _this.def.resolve(data);
                        })

                    })

                }
            });
        }
    })


})