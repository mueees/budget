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
                        date: moment.utc(this.data.date),
                        comment: this.data.comment || "",
                        tag: this.data.tag || ''
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
                            newData.tag = _this.data.tag || '';
                            if( _this.data.date ) newData.date = moment.utc(_this.data.date);
                            if( transaction.get('label') === '') newData.label = 'edit';

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

                            transactions.each(function(transaction){
                                var tagItem;
                                var tagId = transaction.get('tag') + '';

                                tags.each(function(tag){
                                    if(tag.get('_id')+'' == tagId) {
                                        tagItem = {
                                            _id: tagId,
                                            tagName: tag.get('tagName')
                                        }
                                        return;
                                    }
                                });

                                transaction.set('tag', tagItem);
                                result.push(transaction.toJSON());
                            });

                            _this.def.resolve({
                                data: result
                            });
                        }).fail(function(){
                            _this.def.reject();
                        });
                },

                total: function(){
                    var _this = this;
                    $.when(App.Database.TransactionModel.getTotals(this.data.period))
                        .done(function(data){
                            _this.def.resolve(data)
                        })
                        .fail(function(){
                            _this.def.reject();
                        })

                },

                totalByTag: function(){
                    var _this = this;

                    $.when(
                        App.Database.TransactionModel.getTotalsByTag(this.data.period),
                        App.Database.TagCollection.getTags()
                    )
                        .done(function(totalByTags, tags){
                            var result = [];
                            _.each(totalByTags, function(totalByTag){
                                var data = {
                                    count: totalByTag.total
                                };
                                if( totalByTag.tag ){
                                    data.tagId = totalByTag.tag;

                                    tags.each(function(tag){
                                        if(tag.get('_id') == data.tagId) {
                                            data.tagName = tag.get('tagName');
                                        }
                                    })
                                }
                                result.push(data);
                            });
                            result = _.sortBy(result, function(obj){ return Math.max(obj.count*1); });
                            result.reverse();
                            _this.def.resolve({data:result});

                        })
                        .fail(function(err){
                            _this.def.reject();
                        })
                }
            });
        }
    })


})