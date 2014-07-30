define([
    'backbone',
    'marionette'
], function(Backbone, Marionette){

    return Marionette.ItemView.extend({

        initialize: function(){

            var _this = this;
            _.bindAll(this, "processError", "valid", 'invalid');

            Backbone.Validation.configure({
                forceUpdate: true
            });
            Backbone.Validation.bind(this, {
                valid: _this.valid,
                invalid: _this.invalid
            });

        },

        onRender: function(){
            this.stickit();
        },

        valid: function(view, attr){
            var $el = view.$('[name=' + attr + ']'),
                $section = $el.closest('.form-group'),
                messages = view.$('.messages');

            $section.removeClass('error-row');
            messages.find('li[data-name="'+attr+'"]').remove();
        },

        invalid: function(view, attr, error) {
            var $el = view.$('[name=' + attr + ']'),
                $section = $el.closest('.form-group'),
                messages = view.$('.messages');

            messages.addClass('error-messages');
            $section.addClass('error-row');
            messages.find('li[data-name="'+attr+'"]').remove();
            messages.append("<li data-name='"+attr+"'>"+ error +"</li>");
        },

        processError: function(model, xhr){
            this.resetLoadingState();
            var errors = this.clearXhr(xhr);
            this.showErrors(errors);
        },

        showErrors: function(errors){
            var messages = this.$el.find('.messages').html('').addClass('error-messages');
            if( _.isString(errors) ){
                this.$el.find('.messages').append("<li>"+ errors +"</li>");
            }else{
                for(var key in errors){
                    this.invalid(this, key, errors[key]);
                }
            }
        },

        clearXhr: function(xhr){
            var response,
                errors,
                defaultErrorMessage = "Server error. Please try again later.";

            //если нет респонса, возвращаем стандартную ошибку
            try{ response = JSON.parse(xhr.responseText) }catch(e){return defaultErrorMessage};

            //если в респонсе нет поля errors, возвращаем стандартную ошибку
            var errors = ( "error" in response );
            if(!errors) return defaultErrorMessage;

            return response["error"];
        },

        onBeforeClose: function(){
            Backbone.Validation.unbind(this);
        },

        loadingState: function(){
            this.$el.find('.submit-form').button("loading");
        },

        resetLoadingState: function(){
            this.$el.find('.submit-form').button("reset");
        }
    });

})