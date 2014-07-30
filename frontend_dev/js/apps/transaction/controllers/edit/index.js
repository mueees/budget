define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'


], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Transaction.Edit", {

        startWithParent: false,

        define: function( Add, App, Backbone, Marionette, $, _ ){

            Add.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                    this.id = options.id;
                },

                show: function(){
                    this.layout = new Layout();
                    this.region.show(this.layout);
                    this.transactionEdit = new App.Widget.Transaction.Edit.Controller({
                        region: this.layout.transaction,
                        id: this.id
                    });

                    App.execute(config.commands['notify:showNotify'], {text: 'Loading...'});
                    $.when(this.transactionEdit.show()).done(
                        function(){
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    ).fail(
                        function(){
                            App.execute(config.commands['notify:showNotify:side'], {
                                text: 'Server error.',
                                type: 'error'
                            });
                            App.execute(config.commands['notify:clearAllNotice']);
                        }
                    );

                    this.subscribe();
                },

                subscribe: function(){
                    this.listenTo(this.transactionEdit, 'deleteTransaction', this.deleteTransactionHandler);
                    this.listenTo(this.transactionEdit, 'noTransaction', this.noTransactionHandler);
                    this.listenTo(this.transactionEdit, 'cancelBtn', this.cancelHandler);
                    this.listenTo(this.transactionEdit, 'edit', this.editHandler);
                },

                cancelHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                noTransactionHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                deleteTransactionHandler: function(){
                    App.navigate('#report', {trigger: true});
                },

                editHandler: function(){
                    App.execute(config.commands['notify:showNotify:side'], {text: 'Transaction was edited.'});
                    App.navigate('#report', {trigger: true});
                },

                onClose: function(){
                    this.transactionEdit.close();
                    this.layout.close();
                }

            });
        }
    })

})