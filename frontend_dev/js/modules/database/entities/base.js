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
                initialize: function(){
                    this.connect();
                },

                connect: function(){
                    var def = new $.Deferred();
                    var _this = this;

                    if( this.db && this.db.onStoreReady() ){
                        return def.resolve(_this);
                    }else{
                        this.db = new IDBStore({
                            dbVersion: 1,
                            storeName: 'Tags',
                            keyPath: 'id',
                            autoIncrement: true,
                            onStoreReady: function(){
                                def.resolve(_this);
                            },
                            onError: function(){
                                def.reject(_this);
                            }
                        });
                    }

                    return def.promise();
                }

            });

        }
    })


})