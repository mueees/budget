define([
    'marionette',
    'text!../templates/MainTemp.html'
], function(Marionette, template){
    return Marionette.ItemView.extend({

        template: _.template(template),

        triggers: {
            'click .menu-toggle': "openMenu"
        },

        initialize: function(){

        },

        onClose: function(){

        }

    });
})