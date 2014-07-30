define([
    'marionette',
    'text!../templates/TranactionTemp.html',
    'moment'
], function(Marionette, template, moment){

    return Marionette.ItemView.extend({

        tagName: 'tr',

        template: _.template(template),

        className: "choosePointer",

        ui: {
            tagName: '.tagName'
        },

        triggers: {
            'click': "chooseTransaction"
        },

        initialize: function(){},

        serializeData: function(){
            var data = this.model.toJSON();
            var format = "DD MMMM";
            data.dateLabel = moment(data.date).format(format);
            return data;
        }
    });

})