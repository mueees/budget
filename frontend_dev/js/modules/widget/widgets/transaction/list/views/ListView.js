define([
    'marionette',
    'text!../templates/ListTemp.html',
    './Transaction',
    './NoTransaction'
], function(Marionette, template, Transaction, NoTransaction){

    return Marionette.CompositeView.extend({

        className: "wrapper",

        itemView: Transaction,

        emptyView: NoTransaction,

        itemViewContainer: 'tbody',

        template: _.template(template),

        events: {},

        initialize: function(){
            this.collection = this.model.get('data');
        },

        onCompositeRendered : function() {
            this.on('itemview:chooseTransaction',function(view, data) {
                this.trigger('chooseTransaction', data.model);
            });
        }
    });

})