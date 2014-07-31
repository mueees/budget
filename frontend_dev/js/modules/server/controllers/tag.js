define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    './base'
], function(jQuery, Backbone, Marionette, App, config){
    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.TagController = Server.BaseController.extend({
                initialize: function(){
                    Server.BaseController.prototype.initialize.apply(this, arguments);
                },
                create: function(){
                    var tag = App.Database.TagModel();
                },
                get: function(){
                    return [
                        {
                            "_id": "53d7f4790b777abc6822cb27",
                            "tagName": "досуг"
                        },
                        {
                            "_id": "53d7f4790b777abc6822cb29",
                            "tagName": "еда"
                        },
                        {
                            "_id": "53d7f4790b777abc6822cb2a",
                            "tagName": "другое"
                        },
                        {
                            "_id": "53d7f86876e9dd430a73cf9b",
                            "tagName": "хоз нужды"
                        },
                        {
                            "_id": "53d7f87376e9dd430a73cf9c",
                            "tagName": "гигиенические средства"
                        },
                        {
                            "_id": "53d7f4790b777abc6822cb28",
                            "tagName": "автомобиль"
                        },
                        {
                            "_id": "53d7fffdaa53b2c20b20ebbc",
                            "tagName": "обед"
                        }
                    ]
                }
            });
        }
    })


})