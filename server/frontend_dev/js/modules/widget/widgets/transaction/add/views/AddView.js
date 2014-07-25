define([
    'marionette',
    'text!../templates/AddTemp.html'
], function(Marionette, template, Tag, NoTags){

    return Marionette.ItemView.extend({

        className: "form-horizontal",

        tagName: 'form',

        template: _.template(template),

        triggers: {
            'click .tags li' : "tagHandler"
        },

        events: {
            'submit': "submitHandler"
        },

        ui: {
            tags: '.tags'
        },

        initialize: function(){},

        serializeData: function(){
            return {
                tags: this.collection.toJSON()
            }
        },

        onRender: function(){
            this.stickit();
        },

        submitHandler: function(e){

            e.preventDefault();
            this.model.set(this.getData());
            console.log(this.model.toJSON());
            /*

            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.signIn({
                    success: this.processSuccessSignIn,
                    error: this.processError
                });
            }*/
        },

        tagHandler: function(e){
            var $el = $(e.target).closest('li');
            $el.toggleClass('active');
        },

        getData: function(){
            var data =  Backbone.Syphon.serialize(this);
            var tag = this.ui.tags.find('.active').data('id');
            if(tag) data.tags = [tag];
            return data;
        },

        onCompositeRendered : function() {}
    });

})