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

            var $el = $(e.target);
            var path = $el.data('path');

            if(!path || path == this.model.get('path')) return false;

            this.model.set('path', path);
        },

        onClose: function(){

        }

    });
})