define([
    'marionette',
    'text!../templates/ProjectTemp.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'tr',

        template: _.template(template),

        events: {
            'click' : "elHandler",
            'click .deleteBtn': "deleteBtn",
            'click .editBtn': "editBtn"
        },

        ui: {
            name: '.name .text'
        },

        initialize: function(){
            this.listenTo(this.model, "change:name", this.handlerChangeName);
            this.listenTo(this.model, "destroy", this.handlerDestroy);
        },

        handlerChangeName: function(){
            this.ui.name.html( this.model.get('name') );
        },

        handlerDestroy: function(){
            this.close();
        },

        elHandler: function(e){
            e.preventDefault();
            this.trigger('el:click', this.model);
        },

        deleteBtn: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger('deleteBtn', this.model);
        },

        editBtn: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.trigger('editBtn', this.model);
        }
    });

})