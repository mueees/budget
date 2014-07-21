define([
    'jquery',
    'backbone',
    'marionette',
    'apps',
    'config',

    /*modules*/
    'modules/log/module'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Service.Storage", {

        startWithParent: true,

        define: function( Storage, App, Backbone, Marionette, $, _ ){

            var log = App.reqres.request('getLog', "Service.Storage");


            var S = Marionette.Controller.extend({
                initialize: function(){
                    //key value storage
                    this._store = {};
                },

                set: function(key, value){
                    this._store[key] = value;
                },

                get: function(key){
                    return this._store[key];
                }
            })

            Storage.s = new S();

            App.reqres.setHandler(config.reqres['service:storage:get'], function(key){
                return Storage.s.get(key);
            });
            App.reqres.setHandler(config.reqres['service:storage:set'], function(key, value){
                Storage.s.set(key, value);
            });

            App.reqres.setHandler(config.reqres['service:storage:getNew'], function(){
                return new S();
            });

            log('Initialized');
        }
    })

})