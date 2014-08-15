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

            Database.TransactionModel = Database.BaseModel.extend({

                storeName: 'Transaction',

                dbOptions: {
                    indexes: [
                        {
                            name: '_id'
                        },
                        {
                            name: 'date'
                        }
                    ]
                },

                defaults: {

                    count: 0,

                    date: new Date(),

                    updated_at: new Date(),

                    comment: '',

                    tags: [],

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

                saveTransaction: function(){
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
                    var model = this.toJSON();
                    this.set('_id', _id);

                    var data = {
                        count: model.count,
                        date: model.date,
                        updated_at: new Date(),
                        comment: model.comment,
                        tags: model.tags,
                        label: 'create'
                    }

                    $.when(this.connect()).done(function(){
                        _this.db.put(data, function(){
                            def.resolve(_this);
                        }, function(error){
                            alert('createNew transaction error');
                        })
                    }).fail(function(){
                            def.reject();
                        })

                    return def.promise();
                }

            });

            Database.TransactionCollection = Database.BaseCollection.extend({

                dbOptions: {
                    indexes: [
                        {
                            name: '_id'
                        },
                        {
                            name: 'date'
                        }
                    ]
                },

                storeName: 'Transaction',

                model: Database.TagModel,

                initialize: function(attributes, options) {
                    //Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTransactionList: function(period){
                    var _this = this;
                    var def = new $.Deferred();
                    var result = [];

                    $.when(this.connect()).done(function(){
                        var range = _this.db.makeKeyRange({
                            lower: new Date(period.start),
                            upper: new Date(period.end)
                        });

                        _this.db.iterate(function(transactionData, cursor, transaction){
                            result.push(new App.Database.TransactionModel(transactionData));
                        }, {
                            order: 'DESC',
                            index: 'date',
                            keyRange: range,
                            onEnd: function(){
                                def.resolve(result);
                    }
                        });

                    }).fail(function(){
                        def.reject();
                    })

                    return def.promise();

                }
            })

        }
    })


})