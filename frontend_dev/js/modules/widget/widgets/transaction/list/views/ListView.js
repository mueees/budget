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

        itemViewOptions: function(){
            return {
                isExtendMode: this.isExtendMode
            }
        },

        initialize: function(options){
            this.isExtendMode = options.viewOptions.isExtendMode;
            this.collection = this.model.get('data');
            this.listenTo(this.model, 'change', this.changeHandler);
        },

        serializeData: function(){
            var data = this.model.toJSON();
            data.isExtendMode = this.isExtendMode;
            return data;
        },

        changeHandler: function(){
            this.collection = this.model.get('data');
            this.render();
        },

        onCompositeRendered : function() {
            this.on('itemview:chooseTransaction',function(view, data) {
                this.trigger('chooseTransaction', data.model);
            });
        }
    });

})