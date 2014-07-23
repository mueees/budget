define([
    'marionette',
    'text!../templates/LayoutTemp.html'
], function(Marionette, template){

    return Marionette.Layout.extend({

        template: _.template(template),

        className: "container-fluid",

        regions: {
            header: '.header-container',
            content: '.content-container',
            menu: '.menu-container'
        }

    })

})