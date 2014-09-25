define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/EditView'

], function(jQuery, Backbone, Marionette, App, config, EditView){

    App.module("Widget.Transaction.Edit", {

        startWithParent: true,

        define: function( Edit, App, Backbone, Marionette, $, _ ){

            Edit.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    options = options || {};
                    this.region = options.region;
                    this.tags = App.reqres.request(config.reqres['tag:collection:entity']);
                    this.transaction = App.reqres.request(config.reqres['transaction:entity']);
                    this.transaction.set({
                        _id: options.id
                    })

                    this.transaction.validation = {
                        count: {
                            required: true,
                            pattern: 'number'
                        },
                        date: {
                            required: true
                        }
                    }

                    this.view = null;
                },

                show: function(){
                    var _this = this;
                    var def = $.Deferred();

                    $.when(this.tags.fetch(), this.transaction.getData()).done(function(){

                        if( !_this.transaction.get('count') && _this.transaction.get('count') !== 0 ){
                            _this.trigger('noTransaction');
                            return false;
                        }

                        _this.view = new EditView({
                            model: _this.transaction,
                            collection: _this.tags
                        });

                        _this.region.show(_this.view);

                        _this.subscribe();

                        def.resolve();
                    });

                    return def.promise();
                },

                subscribe: function(){
                    this.listenTo(this.view, "deleteBtn", this.deleteBtnHandler);
                    this.listenTo(this.view, "cancelBtn", this.cancelHandler);
                    this.listenTo(this.view, "edit", this.editHandler);
                },

                deleteBtnHandler: function(data){
                    var _this = this;
                    var transaction = data.model;
                    var notice = App.reqres.request(config.reqres["notice:get"], {
                        title: "Delete tag",
                        text: "Do you want delete transaction?",
                        textPrimary: "Delete",
                        isCloseAuto: true
                    });

                    App.modal.show(notice);

                    this.listenToOnce(notice, "accept", function(){
                        transaction.removeTransaction({
                            success: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Transaction was removed.'});
                                _this.trigger('deleteTransaction', transaction);
                            },
                            error: function(){
                                App.execute(config.commands['notify:showNotify:side'], {text: 'Cannot delete transaction. Server error.', type: "error"});
                            }
                        })
                    })
                },

                cancelHandler: function(){
                    this.trigger('cancelBtn');
                },

                editHandler: function(transaction){
                    this.trigger('edit', transaction);
                }
            });

        }
    })

})