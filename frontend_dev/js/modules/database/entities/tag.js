define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function($, _, Backbone, Marionette, App, config){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.TagModel = Database.BaseModel.extend({

                storeName: 'Tags',

                dbOptions: {
                    indexes: [
                        {
                            name: '_id'
                        }
                    ]
                },

                defaults: {

                    tagName: "",

                    updated_at: new Date(),

                    isDeleted: false,

                    //create
                    //edit
                    //delete
                    label: null

                },

                initialize: function(attributes, options) {
                    Database.BaseModel.prototype.initialize.apply(this, arguments);
                },

                _generateId: function(){
                    return (new Date).getTime() + Math.floor((Math.random() * Math.random()) * (new Date()).getTime()) + '';
                },

                saveTag: function(){
                    if( !this.get('_id') ){
                        return this.createNew(arguments);
                    } else{
                        this.editTag(arguments);
                    }
                },

                createNew: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var _id = this._generateId();
                    this.set('_id', _id);

                    var data = {
                        tagName: this.get('tagName'),
                        updated_at: new Date(),
                        _id: this.get('_id'),
                        label: 'create'
                    }

                    $.when(this.connect()).done(function(){
                        _this.db.put(data, function(){
                            def.resolve(_this);
                        }, function(error){
                            alert('createNew tag error');
                            def.reject(error);
                        })
                    }).fail(function(){
                        alert('connect tag error');
                        def.reject(error);
                    });

                    return def.promise();
                },

                editTag: function(options){
                    var _this = this;
                    var def = new $.Deferred();

                    var data = {
                        tagName: this.get('tagName'),
                        label: this.get('label'),
                        updated_at: new Date(),
                        _id: this.get('_id'),
                        id: this.get('id')
                    }

                    if( !this.get('label') ) data.label = 'edit';

                    $.when(this.connect()).done(function(){
                        _this.db.put(data, function(){
                            def.resolve(_this);
                        }, function(error){
                            alert('editTag error');
                            def.reject(error);
                        })
                    }).fail(function(){
                        alert('fail editTag error');
                        def.reject(error);
                    })

                    return def.promise();
                },

                getData: function(){
                    var _this = this;
                    var _id =  this.get('_id');
                    var def = new $.Deferred();
                    var result;
                    $.when(this.connect()).done(function(){
                        var range = _this.db.makeKeyRange({
                            lower: _id,
                            upper: _id
                        });

                        _this.db.iterate(function(tag, cursor, transaction){
                            result = new App.Database.TagModel(tag);
                        }, {
                            order: 'DESC',
                            index: '_id',
                            keyRange: range,
                            onEnd: function(){
                                def.resolve(result);
                            }
                        })
                    })
                    return def.promise();
                },

                removeFromLocalDb: function(){
                    var def = new $.Deferred();
                    var id = this.get('id');
                    var _this = this;

                    $.when(this.connect()).done(function(){
                        _this.db.remove(id, function(){
                            def.resolve();
                        }, function(){
                            def.reject();
                        });
                    }).fail(function(){
                        def.reject();
                    })

                    return def.promise();
                }

            });

            Database.TagModel.findById = function(_id){
                var def = new $.Deferred();
                var tag = new Database.TagModel({
                    _id: _id
                });

                $.when(tag.getData()).done(function(tag){
                    def.resolve(tag);
                })
                return def.promise();
            };

            Database.TagModel.removeById = function(_id){
                var def = new $.Deferred();
                var _this = this;

                $.when(App.Database.TagModel.findById(_id)).done(function(tag){
                    if(!tag){
                        _this.def.reject('Cannot find tag');
                        return false;
                    }else{
                        if( tag.get('label') && tag.get('label') == 'create' ){
                            $.when(tag.removeFromLocalDb()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete tag. Server error.');
                            });

                        }else{
                            tag.set({
                                label: 'remove'
                            });

                            $.when(tag.saveTag()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete tag. Server error.');
                            });
                        }
                    }
                })
                return def.promise();
            };

            Database.TagCollection = Database.BaseCollection.extend({

                dbOptions: {
                    indexes: [
                        {
                            name: '_id'
                        }
                    ]
                },

                storeName: 'Tags',

                model: Database.TagModel,

                initialize: function(attributes, options) {
                    //Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTags: function(){
                    var _this = this;
                    var def = new $.Deferred();
                    $.when(this.connect()).done(function(){
                        _this.db.getAll(function(data){
                            var result = new App.Database.TagCollection();
                            _.each(data, function(tag){
                                if(tag.label != 'remove') result.add(tag);
                            })

                            def.resolve(result);
                        }, function(){})
                    }).fail(function(){
                        def.reject(arguments);
                    })
                    return def.promise();
                }
            })

        }
    })


})