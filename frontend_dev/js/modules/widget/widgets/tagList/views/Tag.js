define([
    'marionette',
    'text!../templates/TagTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template(template),

        ui: {
            tagName: '.tagName'
        },

        triggers: {
            'click .deleteBtn': "deleteBtn",
            'click .editBtn': "editBtn"
        },

        initialize: function(){
            this.listenTo(this.model, "change:tagName", this.handlerChangeTagName);
            this.listenTo(this.model, "destroy", this.handlerDestroy);
        },

        handlerChangeTagName: function(){
            this.ui.tagName.html( this.model.get('tagName') );
        },

        handlerDestroy: function(){
            this.close();
        }
    });

})