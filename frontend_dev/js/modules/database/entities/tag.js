define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    './base'
], function($, _, Backbone, Marionette, App, config, async){

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
                        return this.editTag(arguments);
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
                        _id: this.get('_id')
                    };

                    if( this.get('id') ) data.id = this.get('id');
                    if(_.isString(data.updated_at) ) data.updated_at = new Date(data.updated_at);

                    var methods = [];

                    if( !this.get('id') ) {
                        //get id and then save tag
                        methods.push(function(cb){
                            $.when(_this.getIdBy_Id())
                                .done(function(id){
                                    if(id) data.id = id;
                                    cb(null);
                                })
                                .fail(function(){
                                    cb(1);
                                })
                        })
                    }

                    methods.push(function(cb){
                        $.when(_this.connect())
                            .done(function(){
                                _this.db.put(data, function(){
                                    cb(null)
                                }, function(error){
                                    cb(error);
                                })
                            })
                            .fail(function(error){
                                cb(error);
                            })
                    });

                    async.waterfall(methods, function(err){
                        if(err){
                            def.reject();
                            return false;
                        }

                        def.resolve(_this);
                    });

                    return def.promise();
                },

                getIdBy_Id: function(){
                    var _this = this;
                    var _id =  this.get('_id');
                    var def = $.Deferred();
                    $.when(this.connect())
                        .done(function(){
                            var range = _this.db.makeKeyRange({
                                lower: _id,
                                upper: _id
                            });
                            _this.db.query(function(tags, cursor, transaction){
                                var result;
                                if( tags.length ){
                                    result = tags[0].id;
                                }
                                def.resolve(result);
                            }, {
                                order: 'DESC',
                                index: '_id',
                                keyRange: range
                            })
                        })
                    return def.promise();
                },

                getData: function(){
                    var _this = this;
                    var _id =  this.get('_id');
                    var def = $.Deferred();
                    var result = null;
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
                });
                return def.promise();
            };

            Database.TagModel.removeById = function(_id){

                var def = new $.Deferred();

                $.when(App.Database.TagModel.findById(_id)).done(function(tag){
                    if(!tag){
                        return def.resolve();
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

            Database.TagModel.removeTags = function(options){
                var def = new $.Deferred();

                $.when(App.Database.TagCollection.getAllTags())
                    .done(function(tags){
                        var tagToRemove = tags.where(options);

                        var methods = [];
                        _.each(tagToRemove, function(tag){
                            methods.push(function(callback){
                                $.when(tag.removeFromLocalDb())
                                    .done(function(){callback(null)})
                                    .fail(function(){callback(1)});
                            });
                        });

                        async.parallel(methods, function(err){
                            if(err){
                                return def.reject();
                            }
                            def.resolve();
                        });
                    });

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

                    $.when(this.connect())
                        .done(function(){
                            _this.db.getAll(function(data){
                                var result = new App.Database.TagCollection();
                                _.each(data, function(tag){
                                    if(tag.label != 'remove') result.add(tag);
                                });

                                def.resolve(result);
                            }, function(){});
                        })
                        .fail(function(){
                            def.reject(arguments);
                        });

                    return def.promise();
                },

                getAllTags: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    $.when(this.connect())
                        .done(function(){
                            _this.db.getAll(function(data){
                                var tags = new App.Database.TagCollection();
                                tags.add(data);
                                def.resolve(tags);
                            }, function(){});
                        })
                        .fail(function(){
                            def.reject(arguments);
                        });

                    return def.promise();
                },

                getChangingData: function(){
                    var _this = this;
                    var def = new $.Deferred();
                    $.when(this.connect())
                        .done(function(){
                            _this.db.query(function(tags, cursor, transaction){

                                var changingTags = _.filter(tags, function(tag){
                                    if (tag.label){
                                        return tag;
                                    }
                                });
                                _this.add(changingTags);
                                def.resolve(_this);

                            }, {
                                order: 'DESC',
                                index: '_id'
                            })
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                }
            });

            Database.TagCollection.getChangingData = function(){
                var def = $.Deferred();

                //find all tags, that have field label not empty
                var tags = new Database.TagCollection();

                $.when(tags.getChangingData())
                    .done(function(tags){
                        def.resolve(tags);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TagCollection.getAllTags = function(){
                var def = $.Deferred();

                //find all tags, that have field label not empty
                var tags = new Database.TagCollection();

                $.when(tags.getAllTags())
                    .done(function(tags){
                        def.resolve(tags);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TagCollection.resetEditLabel = function(){
                var def = $.Deferred();

                //find all tags, that have field label not empty
                var tags = new Database.TagCollection();

                $.when(tags.getAllTags())
                    .done(function(tags){
                        var tagForEdit = tags.where({label: 'edit'});
                        var methods = [];
                        _.each(tagForEdit, function(tag){
                            tag.set({label: null});
                            methods.push(function(callback){
                                $.when(tag.saveTag())
                                    .done(function(){callback(null)})
                                    .fail(function(){callback(1)});
                            });
                        });
                        async.parallel(methods, function(err){
                            if(err){
                                return def.reject();
                            }
                            def.resolve();
                        });

                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

        }
    })


})