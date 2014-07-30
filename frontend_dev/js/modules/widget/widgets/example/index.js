define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/SignView'

], function(jQuery, Backbone, Marionette, App, config, SignView){

    App.module("Widget.Sign", {

        startWithParent: true,

        define: function( Sign, App, Backbone, Marionette, $, _ ){
            var log;

            Sign.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');
                    this.region = options.region;


                    log('Initialized');
                },

                show: function(options){}

            });

        }
    })

})