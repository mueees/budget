define([
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: 'statistic',

        regions: {
            header: '.header-container',
            main: '.main-container'
        }

    })

})