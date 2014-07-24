define([
    'marionette',
    'text!../templates/ListTemp.html',
    './Tag'
], function(Marionette, template, Tag){

    return Marionette.CompositeView.extend({

        className: "wrapper",

        itemView: Tag,

        itemViewContainer: 'tbody',

        template: _.template(template),

        events: {

        },

        initialize: function(){},

        onCompositeRendered : function() {
            this.on('itemview:deleteBtn',function(view, model) {
                this.trigger('deleteProject', model);
            });

            this.on('itemview:editBtn',function(view, model) {
                this.trigger('editProject', model);
            });
        }
    });

})