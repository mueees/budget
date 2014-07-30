define([
    'marionette',
    'bootstrap'
], function(Marionette){
    return Marionette.Region.extend({

        constructor: function(){
            Marionette.Region.prototype.constructor.apply(this, arguments);
        },

        initialize: function(options){
            var _this = this;
        },

        getEl: function(selector){
            var _this = this,
                $el = $(selector);

            $el.on('show.bs.modal', function(){
                _this.trigger('show.bs.modal');
            });
            $el.on('shown.bs.modal', function(){
                _this.trigger('shown.bs.modal');
            });
            $el.on('hide.bs.modal', function(){
                _this.trigger('hide.bs.modal');
            });
            $el.on('hidden.bs.modal', function(){
                _this.trigger('hidden.bs.modal');
            });

            return $el;
        },

        setModalOptions: function(options){
            this.modalOptions = options || {};
        },

        show: function(view){
            Marionette.Region.prototype.show.apply(this, [view]);
        },

        onShow: function(view){
            view.on("closeWindow", function(){
                this.hide();
            }, this);
            this.$el.modal(this.modalOptions);
        },

        hide: function(){
            this.$el.modal('hide');
        }
    });
})