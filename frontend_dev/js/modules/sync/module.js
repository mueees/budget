define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server',
    'storage',
    'async'
], function(jQuery, Backbone, Marionette, App, config, server, storage, async){

    App.module("Sync", {

        startWithParent: true,

        define: function( Sync, App, Backbone, Marionette, $, _ ){

            var SyncController = Marionette.Controller.extend({
                initialize: function(){

                    _.bindAll(this, "serverClient",
                        "updateSCState",
                        "updateTransactions");
                },

                sync: function(){
                    var def = $.Deferred();
                    var _this = this;
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization...', isAutoHide: false});

                    //async.waterfall([], function(){})

                    this.clientServer()
                        .then(this.serverClient )
                        .done(function(){
                            _this.doneSync();
                            def.resolve();
                        })
                        .fail(function(){
                            _this.failSync();
                            def.reject();
                        });

                    return def.promise();
                },

                doneSync: function(){
                    App.execute(config.commands['notify:clearAllNotify:side']);
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization done'});
                },

                failSync: function(){
                    App.execute(config.commands['notify:clearAllNotify:side']);
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization failed'});
                },

                //client - server sync

                clientServer: function(){
                    var def = $.Deferred();

                    App.reqres.request(config.reqres['service:db:getChangingData'])
                        .then( this.clientServer_send )
                        .then( this.updateCSState )
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                clientServer_send: function(changingData){
                    return $.ajax({
                        type: "POST",
                        url: config.api.sync.clientServer,
                        data: JSON.stringify(changingData)
                    });
                },

                updateCSState: function(updateInfo){
                    var def = $.Deferred();

                    $.when(
                        App.reqres.request(config.reqres['service:db:resetTagEditLabel']),
                        App.reqres.request(config.reqres['service:db:updateTagsId'], updateInfo.newTagId),
                        App.reqres.request(config.reqres['service:db:removeRemovedTag']),

                        App.reqres.request(config.reqres['service:db:resetTransactionEditLabel']),
                        App.reqres.request(config.reqres['service:db:updateTransactionsId'], updateInfo.newTransactionId),
                        App.reqres.request(config.reqres['service:db:removeRemovedTransactions']),

                        App.reqres.request(config.reqres['service:db:updateTagIdInTransactions'], updateInfo.newTagId)
                    )
                        .done(function(){

                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });
                    return def.promise();
                },

                //server - client sync

                serverClient: function(){
                    var def = $.Deferred();

                    $.when( this.server_send() )
                        .then( this.updateSCState )
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        })

                    return def.promise();
                },

                server_send: function(){
                    return $.ajax({
                        type: "POST",
                        url: config.api.sync.serverClient,
                        data: JSON.stringify({
                            lastUpdate: storage.get(config.storage['lastUpdate'])
                        })
                    });
                },

                updateSCState: function(data){
                    var def = $.Deferred();
                    var _this = this;

                    this.updateTags(data.tags)
                        .then(function(){
                            return _this.updateTransactions(data.transactions);
                        })
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            def.reject();
                        });

                    return def.promise();
                },

                //sync tags

                updateTags: function(tags){
                    var def = $.Deferred();

                    var methods = [];
                    _.each(tags, function(tag){

                        if( tag.isDeleted ){
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:removeTagById'], tag._id))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    })
                            })
                        }else{
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:editOrCreateTag'], tag))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    });
                            })
                        }

                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                },

                updateTransactions: function(transactions){
                    var def = $.Deferred();

                    var methods = [];
                    _.each(transactions, function(transaction){

                        if( transaction.isDeleted ){
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:removeTransactionById'], transaction._id))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    })
                            })
                        }else{
                            methods.push(function(cb){
                                $.when(App.reqres.request(config.reqres['service:db:editOrCreateTransaction'], transaction))
                                    .done(function(){
                                        cb(null);
                                    })
                                    .fail(function(){
                                        cb(1);
                                    });
                            })
                        }

                    });

                    async.parallel(methods, function(err){
                        if(err){
                            return def.reject();
                        }
                        def.resolve();
                    });

                    return def.promise();
                }
            });

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.syncController = false;

                    if(storage.get(config.storage['lastUpdate'])){
                        this.lastUpdate = storage.get(config.storage['lastUpdate']);
                    }else{
                        this.lastUpdate = 0;
                        storage.set(config.storage['lastUpdate'], 0);
                    }

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(App.channels.main, config.channels['sync'], this.sync);
                },

                sync: function(){
                    if( this.syncController ) return false;

                    var _this = this;

                    this.syncController = new SyncController();

                    this.syncController.sync()
                        .done(function(){
                            _this.syncController.close();
                            _this.syncController = false;
                            storage.set(config.storage['lastUpdate'], (new Date()).getTime());
                        })
                        .fail(function(){
                            _this.syncController.close();
                            _this.syncController = false;
                        }).always(function(){
                            App.reloadCurrentApp();
                        })
                }
            });

            App.on('initialize:before', function(){
                if( config.data.db == "local" ){
                    var controller = new Controller({});
                }
            })
        }
    })

})