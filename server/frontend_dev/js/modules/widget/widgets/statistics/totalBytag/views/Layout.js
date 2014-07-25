define([
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "widget-container",

        initialize: function(){
            this.listenTo(this.model, 'request', this.startRequestHandler);
            this.listenTo(this.model, 'fetch:end', this.endFetchHandler);
            this.listenTo(this.model, 'error', this.endFetchHandler);
        },

        regions: {
            main: '.main-container'
        },

        startRequestHandler: function(){
            this.$el.addClass('loadingState');
        },
        endFetchHandler: function(){
            this.$el.removeClass('loadingState');
        }

    })

})