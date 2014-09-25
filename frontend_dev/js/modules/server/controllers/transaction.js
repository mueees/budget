define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'idb',
    './base',
    'modules/database/module'
], function(jQuery, Backbone, Marionette, App, config, IDBStore){

    App.module("Server", {

        startWithParent: true,

        define: function( Server, App, Backbone, Marionette, $, _ ){

            Server.TransactionController = Server.BaseController.extend({

                initialize: function(){
                    Server.BaseController.prototype.initialize.apply(this, arguments);
                },

                create: function(){
                    var _this = this;
                    var transaction = new App.Database.TransactionModel({
                        count: this.data.count || 0,
                        date: new Date(this.data.date),
                        comment: this.data.comment || "",
                        tags: this.data.tags || []
                    });

                    $.when(transaction.saveTransaction()).done(function(){
                        _this.def.resolve({
                            _id: transaction.get('_id')
                        });
                    })
                },

                edit: function(){
                    var _this = this;

                    $.when(App.Database.TransactionModel.findById(this.data._id)).done(function(transaction){
                        if(!transaction){
                            _this.def.reject('Cannot find transaction');
                            return false;
                        }else{

                            var newData = {};
                            if( _this.data.count ) newData.count = _this.data.count;
                            if( _this.data.comment ) newData.comment = _this.data.comment;
                            if( _this.data.tags ) newData.tags = _this.data.tags;
                            if( _this.data.date ) newData.date = new Date(_this.data.date);

                            transaction.set(newData);

                            $.when(transaction.saveTransaction()).done( function(){
                                _this.def.resolve();
                            }).fail(function(){
                                _this.def.reject('Cannot update transaction. Server error.');
                            });
                        }
                    })
                },

                remove: function(){
                    var _this = this;
                    $.when(App.Database.TransactionModel.removeById(this.data._id)).done(function(){
                        _this.def.resolve();
                    }).fail(function(){
                        _this.def.reject('Cannot delete transaction. Server error.');
                    })
                },

                getById: function(){
                    var transaction = new App.Database.TransactionModel({
                        _id: this.data._id
                    });
                    var _this = this;
                    $.when(transaction.getData()).done(function(transaction){
                        if(!transaction){
                            _this.def.reject();
                            return false;
                        }
                        _this.def.resolve(transaction.toJSON());
                    }).fail(function(){
                        _this.def.reject();
                    });
                },

                transactionList: function(){
                    var _this = this;
                    $.when(
                            (new App.Database.TransactionCollection()).getTransactionList(this.data.period),
                            (new App.Database.TagCollection()).getTags()
                        ).done(function(transactions, tags){

                            var result = [];

                            _.each(transactions, function(transaction){
                                var resultTags = [];
                                _.each(transaction.get('tags'), function(transactionTagId){
                                    var result = {
                                        id: transactionTagId + ''
                                    };
                                    tags.each(function(tag){
                                        if(tag.get('_id')+'' == transactionTagId+'') {
                                            result.tagName = tag.get('tagName');
                                        }
                                    })
                                    resultTags.push(result);
                                })
                                transaction.set('tags', resultTags);
                                result.push(transaction.toJSON());
                            })

                            _this.def.resolve({
                                data: result
                            });
                        }).fail(function(){
                            _this.def.reject();
                        });
                }
            });
        }
    })


})