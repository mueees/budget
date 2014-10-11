define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'idb'
], function($, _, Backbone, Marionette, App, config, IDBStore){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.BaseModel = Backbone.Model.extend({
                initialize: function(){},

                connect: function(){
                    var def = new $.Deferred();
                    var _this = this;

                    if(!_this.storeName) {
                        alert("don't have store name");
                        return false;
                    }

                    if( this.db ){
                        return def.resolve(_this);
                    }else{
                        var options = {
                            dbVersion: 2,
                            storeName: _this.storeName,
                            keyPath: 'id',
                            autoIncrement: true,
                            onStoreReady: function(){
                                def.resolve(_this);
                            },
                            onError: function(err){
                                alert('Error connect to database!');
                                console.log(err);
                                def.reject(_this);
                            }
                        }

                        $.extend(options, this.dbOptions || {});
                        this.db = new IDBStore(options);
                    }

                    return def.promise();
                }

            });

            Database.BaseCollection = Backbone.Collection.extend({

                initialize: function(){},

                connect: function(){
                    var def = new $.Deferred();
                    var _this = this;

                    if(!_this.storeName) {
                        alert("don't have store name");
                        return false;
                    }

                    if( this.db ){

                        if( this.db.onStoreReady() ){
                            return def.resolve(_this);
                        }else{
                            return def.reject(_this);
                        }

                    }else{
                        var options = {
                            dbVersion: 1,
                            storeName: _this.storeName,
                            keyPath: 'id',
                            autoIncrement: true,
                            onStoreReady: function(){
                                def.resolve(_this);
                            },
                            onError: function(err){
                                console.log(err);
                                def.reject(_this);
                            }
                        }

                        $.extend(options, this.dbOptions || {});
                        this.db = new IDBStore(options);
                    }

                    return def.promise();
                }
            })

        }
    })


})