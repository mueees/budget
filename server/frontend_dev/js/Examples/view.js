define([
    'marionette',
    'text!../templates/MenuTemp.html'
], function(
    Marionette,
    template
    ){
    return Marionette.ItemView.extend({

        template: _.template(template),

        initialize: function(){

        },

        onClose: function(){

        }

    });
})