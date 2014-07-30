define([
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "tags",

        events: {
            "submit": "submitHandler"
        },

        ui: {
            'add': '.add'
        },

        regions: {
            list: '.list-container'
        },

        submitHandler: function(e){
            e.preventDefault();
            var tagName = this.ui.add.val();
            tagName = $.trim(tagName);
            this.trigger('addNewTag', tagName);
        },

        resetForm: function(){
            this.ui.add.val('');
        }

    })

})