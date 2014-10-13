define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    'async',
    './entities/base',
    './entities/tag',
    './entities/transaction'
], function(jQuery, Backbone, Marionette, App, config, async){
    App.module("Database", {

        startWithParent: true,

        define: function( Database, App, Backbone, Marionette, $, _ ){

            Database.initDatabase = function(){
                var def = $.Deferred();
                Database.db.transaction(function(tx){
                    tx.executeSql("DROP TABLE IF EXISTS `tags`");
                    tx.executeSql("CREATE TABLE `tags` (_id unique, tagName, updated_at, label)");
                    tx.executeSql("DROP TABLE IF EXISTS `transactions`" );
                    tx.executeSql("CREATE TABLE `transactions` (_id unique, count, date, updated_at, comment, tag, label)");
                    def.resolve();
                });

                return def.promise();
            };

            Database.removeDatabase = function(){
                var def = $.Deferred();
                Database.db.transaction(function(tx){
                    tx.executeSql("DROP TABLE IF EXISTS `tags`");
                    tx.executeSql("DROP TABLE IF EXISTS `transactions`" );
                    def.resolve();
                });

                return def.promise();
            };

            App.on('initialize:before', function(){
                //window.sqlitePlugin.openDatabase
                //window.openDatabase

                var provider = window;
                if(config.data.dbOptions.provider == "sqlite"){
                    provider = (window.sqlitePlugin) ? window.sqlitePlugin : window;
                }

                Database.db = provider.openDatabase(
                    config.data.dbOptions.db_name,
                    config.data.dbOptions.version,
                    config.data.dbOptions.description,
                    config.data.dbOptions.dbSize
                );

                //todo: поставить просчитываться на ночь
                /*var count = 1000000;
                var start = new Date();
                var methods = [];

                for(var i = 0; i < count; i++){
                    methods.push(function(cb){
                        var tag = new Database.TagModel({
                            tagName: (new Date()).getTime() + ''
                        });
                        $.when(tag.saveTag())
                            .done(function(){
                                cb();
                            })
                    })
                }

                async.waterfall(methods, function(){
                    console.log(new Date() - start);
                })*/

                //waterfall - 100 - 11701
                //waterfall - 1000 - 124516
                //waterfall - 10000 - 2094690

                //parallel - 100 - 10965


            })

        }
    })


})