define([
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "widget-container",

        initialize: function(){
            this.listenTo(this.model, 'request', this.startRequestHandler);
            this.listenTo(this.model, 'sync', this.endRequestHandler);
        },

        regions: {
            main: '.main-container'
        },

        startRequestHandler: function(){
            this.$el.addClass('loadingState');
        },
        endRequestHandler: function(){
            this.$el.removeClass('loadingState');
        }

    })

})