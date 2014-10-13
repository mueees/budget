define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    './base'
], function($, _, Backbone, Marionette, App, config, async){

    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.TransactionModel = Database.BaseModel.extend({

                tableName: 'transactions',

                defaults: {

                    count: 0,

                    date: moment.utc(),

                    updated_at: moment.utc(),

                    comment: '',

                    tag: null,

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
                    var _this = this;
                    var arg = arguments;


                    if( !this.get('_id') ){
                        return this.createNew(arguments);
                    } else{
                        if( this.get('_idBefore') ){
                            //we have this transaction now
                            return this.editTransaction(arguments);
                        }else{
                            var def = $.Deferred();

                            //check, does we have this transaction or no ?
                            $.when(Database.TransactionModel.findById(this.get('_id')))
                                .done(function(tag){
                                    if(tag){
                                        // if we have transaction now, so we just edit them
                                        $.when(_this.editTransaction(arg))
                                            .done(function(){
                                                def.resolve();
                                            })
                                            .fail(function(){def.reject()})
                                    }else{
                                        // if we don't have transaction now, so we just create them
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

                editTransaction: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var idForUpdate = this.get('_idBefore') || this.get('_id');

                    var data = [
                        this.get('_id'),
                        this.get('count'),
                        this.get('tag'),
                        this.convertMomentDateToDatetime( this.get('date') ),
                        this.convertMomentDateToDatetime( this.get('updated_at') ),
                        this.get('comment'),
                        this.get('label')
                    ];

                    var sql = "UPDATE " + this.tableName + " SET _id=?, count=?, tag = ?, date=?,  updated_at=?, comment=?, label=? WHERE _id=" + "'"+idForUpdate+"'";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this)
                    }, function(tx, err){
                        def.reject(err);
                    });

                    return def.promise();
                },

                createNew: function(options){
                    var _this = this;
                    var def = new $.Deferred();
                    var _id = this.get('_id') || this._generateId();
                    var momentDate = moment.utc();
                    var model = this.toJSON();
                    var dateMoment = moment.utc(model.date);
                    var label = (this.get('label') || this.get('label') === '') ? this.get('label') : 'create';

                    this.set('_id', _id);
                    this.set('label', 'create');
                    this.set('updated_at', momentDate);
                    this.set('date', dateMoment);

                    var data = [
                        _id,
                        model.count,
                        model.tag,
                        this.convertMomentDateToDatetime(dateMoment),
                        this.convertMomentDateToDatetime(momentDate),
                        model.comment,
                        label
                    ];

                    var sql = "INSERT INTO " + this.tableName + " ( _id, count, tag, date, updated_at, comment, label ) VALUES(?, ?, ?, ?, ?, ?, ?)";

                    this.makeRequest(sql, data, function(tx, results){
                        def.resolve(_this);
                    }, function(tx, err){
                        def.reject(err);
                    });

                    return def.promise();
                },

                getData: function(){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE _id=" + "'"+this.get('_id')+"'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        var transaction;
                        if(data[0]){
                            transaction = new App.Database.TransactionModel(data[0]);
                        }

                        def.resolve(transaction);
                    }, function(tx, err){
                        alert(err);
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

            Database.TransactionModel.findById = function(_id){
                var def = new $.Deferred();
                var transaction = new Database.TransactionModel({
                    _id: _id
                });

                $.when(transaction.getData()).done(function(transaction){
                    def.resolve(transaction);
                }).fail(function(tx, err){
                    def.reject();
                });

                return def.promise();
            };

            Database.TransactionModel.removeById = function(_id){
                var def = new $.Deferred();

                $.when(App.Database.TransactionModel.findById(_id)).done(function(transaction){
                    if(!transaction){
                        def.resolve();
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
                var def = $.Deferred();
                var transactions = new Database.TransactionCollection();

                $.when(transactions.getTransactionByTagId(tagId)).done(function(transactions){

                    transactions.each(function(transaction){
                        transaction.set({
                            'tag': '',
                            updated_at:  moment.utc()
                        });

                        if( !transaction.get('label') ) transaction.get('edit');
                    })

                    $.when( transactions.saveTransactions())
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(err){
                            def.reject(err);
                        });

                }).fail(function(err){
                    def.reject();
                })
                return def.promise();
            };

            Database.TransactionModel.removeTransactions = function(options){
                var def = new $.Deferred();

                $.when(App.Database.TransactionCollection.getAllTransactions())
                    .done(function(transactions){
                        var transactionsToRemove = transactions.where(options);
                        var methods = [];
                        _.each(transactionsToRemove, function(transactions){
                            methods.push(function(callback){
                                $.when(transactions.removeFromLocalDb())
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

            Database.TransactionCollection = Database.BaseCollection.extend({

                tableName: 'transactions',

                model: Database.TransactionModel,

                initialize: function(attributes, options) {
                    Database.BaseCollection.prototype.initialize.apply(this, arguments);
                },

                getTransactionList: function(period){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM "+ this.tableName +" WHERE label != 'remove' AND datetime(date) > datetime('"+period.start+"') AND datetime(date) < datetime('"+period.end+"')";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(tx, err){
                        alert(err)
                        def.reject();
                    });

                    return def.promise();
                },

                getTransactionByTagId: function(tagId){
                    var _this = this;
                    var def = new $.Deferred();

                    var sql = "SELECT * FROM " + this.tableName + " WHERE tag = '"+ tagId +"'";

                    this.makeRequest(sql, [], function(tx, results){
                        var data = _this.collectResult(results);
                        _this.add(data);
                        def.resolve(_this);
                    }, function(tx, err){
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
                        def.resolve(_this)
                    }, function(tx, err){
                        def.reject();
                    });

                    return def.promise();
                },

                getAllTransactions: function(){
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

                saveTransactions: function(){
                    var def = $.Deferred();
                    var methods = [];
                    this.each(function(trnasaction){
                        methods.push(function(cb){
                            $.when(trnasaction.saveTransaction())
                                .done(function(){
                                    cb(null);
                                })
                                .fail(function(err){
                                    cb(err);
                                })
                        })
                    })

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject(err);
                        }
                        def.resolve();
                    })

                    return def.promise();


                }
            })

            Database.TransactionCollection.getChangingData = function(){
                var def = $.Deferred();

                var transactions = new Database.TransactionCollection();

                $.when(transactions.getChangingData())
                    .done(function(transactions){
                        def.resolve(transactions);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TransactionCollection.getAllTransactions = function(){
                var def = $.Deferred();

                var transactions = new Database.TransactionCollection();

                $.when(transactions.getAllTransactions())
                    .done(function(transactions){
                        def.resolve(transactions);
                    })
                    .fail(function(){
                        def.reject();
                    });

                return def.promise();
            };

            Database.TransactionCollection.resetEditLabel = function(){
                var def = $.Deferred();

                var transactions = new Database.TransactionCollection();

                $.when(transactions.getAllTransactions())
                    .done(function(transaction){
                        var transactionsForEdit = transactions.where({label: 'edit'});
                        var methods = [];
                        _.each(transactionsForEdit, function(transaction){
                            transaction.set({label: null});
                            methods.push(function(callback){
                                $.when(transaction.saveTransaction())
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