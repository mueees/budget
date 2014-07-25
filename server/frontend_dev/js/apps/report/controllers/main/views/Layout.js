define([
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        regions: {
            total: '.total-container',
            table: '.table-container'
        }

    })

})