define([
    'marionette',
    'text!../templates/TotalTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        ui: {
            total: '.total'
        },

        initialize: function(){
            this.subscribe();
        },

        subscribe: function(){
            this.listenTo(this.model, "change:total", this.totalHandler)
        },

        totalHandler: function(){
            this.ui.total.html(this.model.get('total'));
        },

        onClose: function(){

        }

    });
})