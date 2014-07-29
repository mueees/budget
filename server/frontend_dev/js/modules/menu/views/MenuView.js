define([
    'marionette',
    'text!../templates/MenuTemp.html'
], function(
    Marionette,
    template
    ){
    return Marionette.ItemView.extend({

        template: _.template(template),

        tagName: "ul",

        className: "nav sidebar",

        events: {
            "click a" : "linkHandler"
        },

        initialize: function(){
            this.listenTo(this.model, "change:path", this.pathHandler);
        },

        pathHandler: function(){
            var path = this.model.get('path');
            this.$el.find('li').removeClass('active');
            this.$el.find('a[data-path='+ path +']').parent().addClass('active');
        },

        linkHandler: function(e){
            e.preventDefault();

            var $el = $(e.target).closest('a');
            var path = $el.data('path');
            var data = {
                isOpen: false
            };

            if(path || path != this.model.get('path')){
                data.path = path;
            }

            this.model.set(data);
        },

        onClose: function(){

        }

    });
})