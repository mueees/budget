define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/ListView',

    '../../base/index'

], function(jQuery, Backbone, Marionette, App, config, ListView ){

    App.module("Widget.Transaction.List", {

        startWithParent: true,

        define: function( List, App, Backbone, Marionette, $, _ ){
            var log;

            List.Controller = App.Widget.Base.Controller.extend({

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Base');
                    App.Widget.Base.Controller.apply(this, arguments);
                    _.bindAll(this, "successModelUpdate", 'processError');
                    log('Initialized');
                },

                getCollection: function(){
                    return App.reqres.request(config.reqres['transaction:collection:entity']);
                },

                getView: function(){
                    return ListView;
                }
            });

        }
    })

})