define([
    'marionette',
    'text!../templates/template.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({
        template: _.template(template),

        className: "notify",

        events: {
            "click .close" : "animateClose"
        },

        initialize: function(){
            this.render(this.model.toJSON());
            this.$el.addClass(this.model.get("type"));
        },

        animateClose: function(){
            var _this = this;
            this.$el.removeClass('fadeInDown').addClass('animated fadeOutUp');
            this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                _this.close();
            });
        }
    })

})