define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'moment'
], function($, _, Backbone, Marionette, App, config, moment){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.BaseModel = Backbone.Model.extend({
                initialize: function(attributes){
                    this.db = null;
                    if(attributes && _.isString(attributes.updated_at)){
                        this.set('updated_at', moment.utc(attributes.updated_at));
                    }

                    if(attributes && _.isString(attributes.date)){
                        this.set('date', moment.utc(attributes.date));
                    }

                    this.connect();
                },

                connect: function(){
                    this.db = Database.db;
                    this.makeRequest = Database.makeRequest;
                },

                convertMomentDateToDatetime: function(momentDate){
                    return momentDate.format("YYYY-MM-DD HH:mm:ss");
                },

                convertDatetimeToMomentDate: function(datetime){
                    return moment(datetime);
                },

                collectResult: function(results){
                    var data = [];
                    for (var i = 0; i < results.rows.length; i++) {
                        var row = _.clone(results.rows.item(i));
                        if( row.updated_at ) row.updated_at = this.convertDatetimeToMomentDate(row.updated_at);
                        if( row.date ) row.date = this.convertDatetimeToMomentDate(row.date);
                        data.push(row);
                    }

                    return data;
                }

            });

            Database.BaseCollection = Backbone.Collection.extend({

                initialize: function(){
                    this.db = null;
                    this.connect();
                },

                connect: function(){
                    this.db = Database.db;
                    this.makeRequest = Database.makeRequest;
                },

                convertMomentDateToDatetime: function(momentDate){
                    return momentDate.format("YYYY-MM-DD HH:mm:ss");
                },

                convertDatetimeToMomentDate: function(datetime){
                    return moment(datetime);
                },

                collectResult: function(results){
                    var data = [];
                    for (var i = 0; i < results.rows.length; i++) {
                        var row = _.clone(results.rows.item(i));
                        if( row.updated_at ) row.updated_at = this.convertDatetimeToMomentDate(row.updated_at);
                        if( row.date ) row.date = this.convertDatetimeToMomentDate(row.date);
                        data.push(row);
                    }

                    return data;
                }
            })

        }
    })


})