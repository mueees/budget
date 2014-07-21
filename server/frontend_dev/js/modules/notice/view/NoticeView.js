define([
    'marionette',
    'text!../template/NoticeTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        template: _.template( template ),

        events: {
            "click .close-notice" : "closeBtn",
            "click .buttons .decline" : "decline",
            "click .buttons .accept" : "accept"
        },

        initialize: function( options ){
            this.options = options;
        },

        serializeData: function(){
            return this.options;
        },

        onShow: function(){
            this.$el.addClass('notice');
            this.$el.addClass(this.options.addCustomClass);
            this.$el.addClass('status-' + this.options.status );
        },

        closeBtn: function(e){
            if(e) e.preventDefault();
            this.trigger("closeBtn");
            this.trigger("closeWindow");
        },

        decline: function(e){
            if(e) e.preventDefault();
            this.trigger("decline");
            this.trigger("closeWindow");
        },

        accept: function(e){
            if(e) e.preventDefault();
            this.trigger("accept");
            this.trigger("closeWindow");
        }

    })
})