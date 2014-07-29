define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Behaviors.Comment", {

        startWithParent: true,

        define: function( Comment, App, Backbone, Marionette, $, _ ){
            App.behaviors.Comment = Marionette.Behavior.extend({

                events: {
                    'click .comment-toggle': "toggleHandler"
                },

                toggleHandler: function(e){
                    this.view.$el.find('.comment-container').removeClass('hidden-xs');
                    this.view.$el.find('.comment-toggle').remove();
                }
            })
        }
    })


})