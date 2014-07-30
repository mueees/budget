define([
    'marionette',
    'extends/FormView',
    'text!../templates/AddTemp.html',
    'moment'
], function(Marionette, FormView, template, moment){

    return FormView.extend({

        className: "form-horizontal",

        tagName: 'form',

        template: _.template(template),

        triggers: {
            'click .cancel' : "cancelBtn"
        },

        events: {
            'submit': "submitHandler",
            'click .tags li' : "tagHandler"
        },

        ui: {
            tags: '.tags',
            count: '#count'
        },

        behaviors: {
            Calculator: {
                modelField: 'count'
            },
            Comment: {}
        },

        bindings: {
            '[name=count]': {
                observe: 'count'
            }
        },

        initialize: function(){
            FormView.prototype.initialize.apply(this, arguments);
            _.bindAll(this, 'processSuccessCreate');
            this.subscribe();
        },

        serializeData: function(){
            return {
                tags: this.collection.toJSON(),
                transaction: this.model.toJSON(),
                date: moment(this.model.get('date')).format("YYYY-MM-DD")
            }
        },

        subscribe: function(){
            this.listenTo(this.model, "change:count", this.countHandler)
        },

        countHandler: function(){
            this.ui.count.val(this.model.get('count'));
        },

        onRender: function(){
            this.stickit();
        },

        submitHandler: function(e){
            e.preventDefault();
            this.model.set(this.getData());
            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.createTransaction({
                    success: this.processSuccessCreate,
                    error: this.processError
                });
            }
        },

        processSuccessCreate: function(){
            this.trigger('create', this.model);
        },

        tagHandler: function(e){
            var $el = $(e.target).closest('li');
            if(!$el.hasClass('active')) this.ui.tags.find('li').removeClass('active');
            $el.toggleClass('active');
        },

        getData: function(){
            var data = Backbone.Syphon.serialize(this);
            var tag = this.ui.tags.find('.active').data('id');
            if(tag) data.tags = [tag];

            data.date = new Date(data.date);
            return data;
        },

        onCompositeRendered : function() {}
    });

})