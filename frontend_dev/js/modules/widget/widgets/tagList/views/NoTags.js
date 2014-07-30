define([
    'marionette',
    'text!../templates/NoTags.html'
], function(Marionette, template){

    return Marionette.ItemView.extend({

        tagName: 'li',

        template: _.template(template)
    });

})