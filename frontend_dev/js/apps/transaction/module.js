define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './controllers/add/index',
    './controllers/edit/index'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Transaction", {

        startWithParent: false,

        define: function( Transaction, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                },

                add: function(){
                    if( this.subController ) this.subController.close();
                    App.execute(config.commands['notify:clearAllNotice']);
                    this.subController = new Transaction.Add.Controller({
                        region: this.region
                    });
                    this.subController.show();
                },

                edit: function(id){
                    if( this.subController ) this.subController.close();
                    App.execute(config.commands['notify:clearAllNotice']);
                    this.subController = new Transaction.Edit.Controller({
                        region: this.region,
                        id: id
                    });
                    this.subController.show();
                },

                onClose: function(){
                    if(this.subController) this.subController.close();
                }

            });

            var API  = {

                add: function(){
                    App.execute(config.commands['menu:unselect']);
                    Transaction.controller.add();
                },

                edit: function(id){
                    App.execute(config.commands['menu:unselect']);
                    Transaction.controller.edit(id);
                },

                /*Инициализация перед стартом*/
                start: function(){
                    App.execute(config.commands['main:enable']);
                    Transaction.controller = new Controller({
                        region: App.content
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Transaction.controller) {
                        log('delete controller');
                        Transaction.controller.close();
                        delete Transaction.controller;
                    }
                }
            }

            Transaction.edit = API.edit;
            Transaction.start = API.start;
            Transaction.stop = API.stop;
            Transaction.add = API.add;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Transaction');
            })
        }
    })


})