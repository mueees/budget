define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Transaction", {

        startWithParent: false,

        define: function( Transaction, App, Backbone, Marionette, $, _ ){

            var log;

            var Controller = Marionette.Controller.extend({
                initialize: function(options){
                    this.region = options.region;
                },

                start: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.transactionAdd = new App.Widget.Transaction.Add.Controller({
                        region: this.layout.add
                    });
                    this.transactionAdd.show();

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.transactionAdd, 'cancelBtn', this.cancelHandler)
                },

                cancelHandler: function(){
                    App.navigate('#landing', {trigger: true});
                },

                onClose: function(){}
            });

            var API  = {

                add: function(){

                    if( !config.data.user.email ){
                        App.navigate('#landing', {trigger: true});
                    }

                    Transaction.controller.start();
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

            Transaction.start = API.start;
            Transaction.stop = API.stop;
            Transaction.add = API.add;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Transaction');
            })
        }
    })


})