define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    'text!./templates/TabTemp.html'

], function(jQuery, Backbone, Marionette, App, config, template){

    App.module("Component.Tab", {

        startWithParent: true,

        define: function( Tab, App, Backbone, Marionette, $, _ ){
            var log;

            Tab.View = Marionette.ItemView.extend({

                className: 'btn-group btn-group-justified',

                events: {
                    'click button': 'buttonHandler'
                },

                template: _.template(template),

                ui: {
                    buttons: 'button'
                },

                initialize: function(options){
                    this.listenTo(this.model, 'change:currentTab', this.currentTabHandler)
                },

                currentTabHandler: function(){
                    var currentTab = this.model.get('currentTab');
                    this.ui.buttons.removeClass('active');
                    this.$el.find('[data-value='+ currentTab +']').addClass('active');
                },

                buttonHandler: function(e){
                    e.preventDefault();
                    var $el = $(e.target).closest('button');
                    var value = $el.data('value');
                    if(!value) return false;

                    this.model.set('currentTab', value);
                },

                onShow: function(){}

            });

        }
    })

})