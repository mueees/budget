define([
    'marionette',
    'text!../templates/SignTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){
            
        },

        onClose: function(){

        }

    });
})