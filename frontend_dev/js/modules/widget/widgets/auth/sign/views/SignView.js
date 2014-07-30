define([
    'marionette',
    'extends/FormView',
    'text!../templates/SignTemp.html'
], function(Marionette, FormView, template){

    return FormView.extend({

        template: _.template(template),

        className: "well bs-component sign",

        events: {
            "click .signUp": "signUpHandler",
            "click .signIn": "signInHandler"
        },

        bindings: {
            '[name=email]': {
                observe: 'email'
            },
            '[name=password]': {
                observe: 'password'
            }
        },

        ui: {
            email: ".email",
            password: ".password"
        },

        initialize: function(){
            _.bindAll(this, "processSuccessSignUp", "processSuccessSignIn");
            FormView.prototype.initialize.apply(this, arguments);
        },

        signUpHandler: function(e){
            e.preventDefault();

            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.signUp({
                    success: this.processSuccessSignUp,
                    error: this.processError
                });
            }
        },

        processSuccessSignUp: function(){
            this.trigger('signUp');
        },

        processSuccessSignIn: function(){
            this.trigger('signIn');
        },

        signInHandler: function(e){
            e.preventDefault();

            if( this.model.isValid(true) ){
                this.loadingState();
                this.model.signIn({
                    success: this.processSuccessSignIn,
                    error: this.processError
                });
            }
        },

        resetForm: function(){
            for( var key in this.ui ){
                this.ui[key].val('');
            }
        },

        onClose: function(){

        }

    });
})