define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'


], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Transaction.Add", {

        startWithParent: false,

        define: function( Add, App, Backbone, Marionette, $, _ ){

            Add.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                },

                show: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.transactionAdd = new App.Widget.Transaction.Add.Controller({
                        region: this.layout.transaction
                    });
                    this.transactionAdd.show();

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.transactionAdd, 'cancelBtn', this.cancelHandler);
                    this.listenTo(this.transactionAdd, 'create', this.createHandler);
                },

                cancelHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                createHandler: function(){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Transaction was created.'});
                    App.navigate('#report', {trigger: true});
                },

                onClose: function(){
                    this.transactionAdd.close();
                    this.layout.close();
                }

            });
        }
    })

})