define([
    'marionette',
    'text!../template/NoticePromptTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        template: _.template( template ),

        className: "modal-dialog",

        events: {
            "click .closeBtn" : "closeBtn",
            "click .modal-footer .decline" : "decline",
            "click .modal-footer .accept" : "accept",
            "submit": "accept"
        },

        ui: {
            value: '.value'
        },

        initialize: function( options ){
            this.value = "";
            this.options = options;
        },

        serializeData: function(){
            return this.options;
        },

        onShow: function(){
            this.$el.addClass(this.options.addCustomClass);

            this.ui.value.focus();
        },

        closeBtn: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("closeBtn");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        },

        decline: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger("decline");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        },

        accept: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.value = this.ui.value.val();
            this.trigger("accept");
            if( this.options.isCloseAuto ) this.trigger("closeWindow");
        }

    })
})