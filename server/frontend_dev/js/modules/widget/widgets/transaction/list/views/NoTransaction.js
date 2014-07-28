define([
    'marionette',
    'text!../templates/NoTransaction.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template(template)
    });

})