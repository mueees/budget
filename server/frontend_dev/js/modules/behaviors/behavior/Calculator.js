define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Behaviors.Calculator", {

        startWithParent: true,

        define: function( Test, App, Backbone, Marionette, $, _ ){
            App.behaviors.Calculator = Marionette.Behavior.extend({

                defaults: {
                    "modelField": "count"
                },

                ui: {
                    calculator: '.calculator'
                },

                events: {
                    'click .calculator button': "buttonHandler"
                },

                modelField: null,

                onRender: function(){
                    _.bindAll(this, 'buttonHandler');
                    this.model = this.view.model;
                    this.modelField = this.options.modelField || this.defaults.modelField;
                },

                buttonHandler: function(e){
                    var $el = $(e.target).closest('button');
                    var value = $el.data('value');

                    if(!value && value !== 0) return false;

                    if( value == "backspace" ){
                        this.backspaceHandler()
                    }else if( value == 'clear' ){
                        this.clearHandler();
                    }else{
                        this.numberHandler(value);
                    }
                },

                numberHandler: function(value){
                    var count = this.model.get(this.modelField);
                    if(!count){
                        count = '';
                    }else{
                        count += '';
                    }
                    var newCount = count + value;
                    this.model.set({
                        count: newCount
                    })
                },

                clearHandler: function(){
                    this.model.set({
                        count: ''
                    })
                },

                backspaceHandler: function(){
                    var count = this.model.get(this.modelField);
                    count += '';
                    var newCount = count.slice(0, -1);
                    this.model.set({
                        count: newCount
                    })
                }
            })
        }
    })


})