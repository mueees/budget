define([
    'marionette',
    'text!../templates/MainTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){

        },

        onClose: function(){

        }

    });
})