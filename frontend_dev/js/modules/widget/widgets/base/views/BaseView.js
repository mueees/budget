define([
    'marionette',
    'text!../templates/SignTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){
            this.listenTo(this.model, "change:data", this.dataHandler);
        },

        dataHandler: function(){
            this.render();
        },

        onClose: function(){

        }

    });
})