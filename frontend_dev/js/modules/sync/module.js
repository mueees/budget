define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'backbone.server'
], function(jQuery, Backbone, Marionette, App, config, server){
    App.module("Sync", {

        startWithParent: true,

        define: function( Sync, App, Backbone, Marionette, $, _ ){

            var SyncController = Marionette.Controller.extend({
                initialize: function(){
                },

                sync: function(){
                    var def = $.Deferred();
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization...', isAutoHide: false});

                    $.when( this.clientServer() )
                        .then(this.serverClient())
                        .done(this.doneSync)
                        .fail(this.failSync)
                        .always(function(){
                        def.resolve();
                    });

                    return def.promise();
                },

                doneSync: function(){
                    var def = $.Deferred();

                    App.execute(config.commands['notify:clearAllNotify:side']);
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization was finished'});

                    return def.promise();
                },

                failSync: function(){
                    var def = $.Deferred();

                    App.execute(config.commands['notify:clearAllNotify:side']);
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Synchronization was failed'});

                    return def.promise();
                },

                clientServer: function(){
                    var def = $.Deferred();

                    $.when( App.reqres.request(config.reqres['service:db:getChangingData']) )
                        .then( this.clientServer_send )
                        .then( this.updateState )
                        .done(function(){
                            def.resolve();
                        })
                        .fail(function(){
                            debugger
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

                updateState: function(updateInfo){
                    var def = $.Deferred();

                    $.when(
                        App.reqres.request(config.reqres['service:db:updateTagsId'], updateInfo.newTagId),
                        App.reqres.request(config.reqres['service:db:removeRemovedTag']),

                        App.reqres.request(config.reqres['service:db:updateTransactionsId'], updateInfo.newTransactionId),
                        App.reqres.request(config.reqres['service:db:removeRemovedTransactions']),

                        App.reqres.request(config.reqres['service:db:updateTagIdInTransactions'], updateInfo.newTagId)
                    )
                        .done(function(){
                            debugger
                        })
                        .fail(function(){
                            debugger
                        });

                    def.resolve();
                    return def.promise();
                },

                serverClient: function(){
                    var def = $.Deferred();

                    def.resolve();

                    return def.promise();
                }
            })

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.syncController = false;
                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(App.channels.main, config.channels['sync'], this.sync);
                },

                sync: function(){
                    if( this.syncController ) return false;

                    var _this = this;

                    this.syncController = new SyncController();
                    $.when(this.syncController.sync()).always(function(){
                        _this.syncController.close();
                        _this.syncController = false;
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