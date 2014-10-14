define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    'moment',
    './base'
], function($, _, Backbone, Marionette, App, config, async, moment){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.TagModel = Database.BaseModel.extend({

                tableName: 'tags', // table name

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
                    var _this = this;
                    var arg = arguments;

                    if( !this.get('_id') ){
                        return this.createNew(arguments);
                    } else{
                        if( this.get('_idBefore') ){
                            //we have this tag now
                            return this.editTag(arguments);
                        }else{
                            var def = $.Deferred();

                            //check, does we have this tag or no ?
                            $.when(Database.TagModel.findById(this.get('_id')))
                                .done(function(tag){
                                    if(tag){
                                        // if we have tag now, so we just edit them
                                        $.when(_this.editTag(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }else{
                                        // if we don'thave tag now, so we just create them
                                        $.when(_this.createNew(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }
                                })
                                .fail(function(){
                                    def.reject();
                                })

                            return def.promise();
                        }
                    }

                },

                createNew: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var _id = this.get('_id') || this._generateId();
                    var label = (this.get('label') || this.get('label') === '') ? this.get('label') : 'create';
                    var momentDate = moment.utc();


                    this.set('_id', _id);
                    this.set('updated_at', momentDate);

                    var data = [
                        this.get('_id'),
                        this.get('tagName'),
                        this.convertMomentDateToDatetime(momentDate),
                        label
                    ];

                    var sql = "INSERT INTO " + this.tableName + " ( _id, tagName, updated_at, label ) VALUES(?, ?, ?, ?)";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this)
                    }, function(tx, err){
                        alert(err);
                        def.reject();
                    });

                    return def.promise();
                },

                editTag: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var idForUpdate = this.get('_idBefore') || this.get('_id');

                    var data = [
                        this.get('_id'),
                        this.get('tagName'),
                        this.convertMomentDateToDatetime(this.get('updated_at')),
                        this.get('label')
                    ];

                    var sql = "UPDATE " + this.tableName + " SET _id=?, tagName=?, updated_at=?, label=? WHERE _id=" + "'"+idForUpdate+"'";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this)
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                getData: function(){
                    var _this = this;
                    var def = $.Deferred();
                    var sql = "SELECT * FROM " + this.tableName + " WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        var tag;
                        if(data[0]){
                            tag = new App.Database.TagModel(data[0]);
                        }
                        def.resolve(tag);
                    }, function(){
                        def.reject();
                    });
                    return def.promise();
                },

                removeFromLocalDb: function(){
                    var def = new $.Deferred();
                    var _this = this;

                    var sql = "DELETE FROM "+ this.tableName +" WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        def.resolve(_this)
                    }, function(){
                        def.reject();
                    });

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

                tableName: 'tags',

                model: Database.TagModel,

                initialize: function(attributes, options) {
                    Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTags: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM "+ this.tableName +" WHERE label != 'remove'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                getAllTags: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName;

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(){
                        def.reject();
                    });

                    return def.promise();
                },

                getChangingData: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE label <> ''";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(tx, err){
                        def.reject();
                    });

                    return def.promise();
                }
            });

            Database.TagCollection.getTags = function(){
                return (new App.Database.TagCollection()).getTags();
            }

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