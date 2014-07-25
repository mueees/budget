define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/TabTemp.html',
    'moment'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.DateFilter", {

        startWithParent: true,

        define: function( DateFilter, App, Backbone, Marionette, $, _ ){

            DateFilter.View = Marionette.ItemView.extend({

                events: {
                    'click .next': 'nextHandler',
                    'click .prev': 'prevHandler'
                },

                ui: {
                    label: '.dateLabel'
                },

                className: 'dateFiter',

                initialize: function(options){
                    this.generateLabel();
                    this.listenTo(this.model, "change:label", this.labelHandler);
                },

                labelHandler: function(){
                    this.ui.label.html(this.model.get('label'))
                },

                generateLabel: function(){
                    var date = this.model.get('date');

                    this.model.set({
                        label: moment(date).format('MMMM YYYY')
                    })
                },

                template: _.template(template),

                nextHandler: function(e){
                    e.preventDefault();
                    var date = this.model.get('date');
                    var newDate = new Date( date.getTime() );
                    newDate.setMonth(newDate.getMonth() + 1);
                    this.model.set({
                        date: newDate
                    });
                    this.generateLabel();
                },

                prevHandler: function(e){
                    e.preventDefault();
                    var date = this.model.get('date');
                    var newDate = new Date( date.getTime() );
                    newDate.setMonth(newDate.getMonth() - 1);
                    this.model.set({
                        date: newDate
                    });
                    this.generateLabel();
                },

                onShow: function(){}

            });

        }
    })

})