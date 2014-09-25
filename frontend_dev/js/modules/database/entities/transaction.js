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
                        this.editTransaction(arguments);
                    }
                },

                editTransaction: function(options){
                    var _this = this;
                    var def = new $.Deferred();

                    var data = this.toJSON();
                    if( !this.get('label') ) data.label = 'edit';

                    $.when(this.connect()).done(function(){
                        _this.db.put(data, function(){
                            def.resolve(_this);
                        }, function(error){
                            alert('editTransaction error');
                            def.reject(error);
                        })
                    }).fail(function(){
                        alert('fail editTransaction error');
                        def.reject(error);
                    });

                    return def.promise();
                },

                createNew: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var _id = this._generateId();
                    var model = this.toJSON();
                    this.set('_id', _id);

                    var data = {
                        _id: _id,
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

                        _this.db.iterate(function(data, cursor, transaction){
                            result = new App.Database.TransactionModel(data);
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

            Database.TransactionModel.findById = function(_id){
                var def = new $.Deferred();
                var transaction = new Database.TransactionModel({
                    _id: _id
                });

                $.when(transaction.getData()).done(function(transaction){
                    def.resolve(transaction);
                }).fail(function(){
                    def.reject();
                });

                return def.promise();
            };

            Database.TransactionModel.removeById = function(_id){
                var def = new $.Deferred();
                var _this = this;

                $.when(App.Database.TransactionModel.findById(_id)).done(function(transaction){
                    if(!transaction){
                        _this.def.reject('Cannot find transaction');
                        return false;
                    }else{
                        if( transaction.get('label') && transaction.get('label') == 'create' ){
                            $.when(transaction.removeFromLocalDb()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete transaction. Server error.');
                            });

                        }else{
                            transaction.set({
                                label: 'remove'
                            });

                            $.when(transaction.saveTransaction()).done( function(){
                                def.resolve();
                            }).fail(function(){
                                def.reject('Cannot delete transaction. Server error.');
                            });
                        }
                    }
                })
                return def.promise();
            };

            Database.TransactionModel.removeTagById = function(tagId){
                var def = new $.Deferred();
                var transactions = new Database.TransactionCollection();
                $.when(transactions.getTransactionByTagId(tagId)).done(function(transactions){

                    transactions.each(function(transaction){
                        var data= {};
                        var tags = transaction.get('tags');
                        var index = _.indexOf(transaction.get('tags'), tagId);
                        tags.splice(index, 1);
                        data.tags = tags;

                        if( !transaction.get('label') ){
                            data.label = 'edit';
                            data.updated_at = new Date();
                        }

                        transaction.set(data);
                        transaction.saveTransaction();
                    });

                }).fail(function(){
                    alert('fail')
                })
                return def.promise();
            };

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

                model: Database.TransactionModel,

                initialize: function(attributes, options) {
                    //Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTransactionList: function(period){
                    var _this = this;
                    var def = new $.Deferred();
                    var result = [];

                    $.when(this.connect()).done(function(){
                        var range;
                        if(period){
                            range = _this.db.makeKeyRange({
                                lower: new Date(period.start),
                                upper: new Date(period.end)
                            });
                        }else{
                            range = null;
                        }

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
                },

                getTransactionByTagId: function(tagId){
                    var _this = this;
                    var def = new $.Deferred();

                    $.when(this.connect()).done(function(){
                        _this.db.query(function(transactions, cursor, transaction){
                            var result = [];

                            _.each(transactions, function(transaction){

                                if( transaction.tags.length &&
                                    transaction.label != 'remove' &&
                                    $.inArray(tagId, transaction.tags) != -1
                                    ){
                                    //result.push(new App.Database.TransactionModel(transaction));
                                    result.push(transaction);
                                }
                            });
                            _this.add(result);
                            def.resolve(_this);
                        }, {
                            order: 'DESC',
                            index: 'date'
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