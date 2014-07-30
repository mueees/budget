define([
    'marionette',
    'text!../templates/ListTemp.html',
    './Tag',
    './NoTags'
], function(Marionette, template, Tag, NoTags){

    return Marionette.CompositeView.extend({

        className: "wrapper",

        itemView: Tag,

        emptyView: NoTags,

        itemViewContainer: '.list-group',

        template: _.template(template),

        events: {},

        initialize: function(){},

        onCompositeRendered : function() {
            this.on('itemview:deleteBtn',function(view, data) {
                this.trigger('deleteTag', data.model);
            });

            this.on('itemview:editBtn',function(view, data) {
                this.trigger('editTag', data.model);
            });
        }
    });

})