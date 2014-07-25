define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Report.Details", {

        startWithParent: false,

        define: function( Details, App, Backbone, Marionette, $, _ ){

            var log;

            Details.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Report.Details"');
                    log('initialized');
                },

                onClose: function(){
                }
            });
        }
    })

})