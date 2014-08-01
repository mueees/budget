define([
    'marionette',
    'text!../templates/TotalByTagTemp.html',
    '../../../base/views/BaseView'
], function(Marionette, template, BaseView){
    return BaseView.extend({

        template: _.template(template),

        initialize: function(){
            BaseView.prototype.initialize.apply(this, arguments);
        },

        onClose: function(){

        }

    });
})