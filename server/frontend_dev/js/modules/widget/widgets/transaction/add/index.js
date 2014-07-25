define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/AddView'

], function(jQuery, Backbone, Marionette, App, config, AddView){

    App.module("Widget.Transaction.Add", {

        startWithParent: true,

        define: function( Add, App, Backbone, Marionette, $, _ ){
            var log;

            Add.Controller = Marionette.Controller.extend({

                initialize: function(options){
                    options = options || {};
                    this.region = options.region;
                    this.tags = App.reqres.request(config.reqres['tag:collection:entity']);
                    this.transaction = App.reqres.request(config.reqres['transaction:entity']);

                    this.transaction.validation = {
                        count: {
                            required: true,
                            pattern: 'email'
                        }
                    }

                    this.view = null;
                },

                show: function(){

                    var _this = this;
                    var def = $.Deferred();

                    $.when(this.tags.fetch()).done(function(){

                        _this.view = new AddView({
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
                    this.listenTo(this.view, "cancelBtn", this.cancelHandler);
                },

                cancelHandler: function(){
                    this.trigger('cancelBtn');
                }
            });

        }
    })

})