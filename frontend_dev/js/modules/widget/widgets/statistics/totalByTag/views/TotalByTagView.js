define([
    'marionette',
    'text!../templates/TotalByTagTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){
            
        },

        onClose: function(){

        }

    });
})