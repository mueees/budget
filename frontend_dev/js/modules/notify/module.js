define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*views*/
    './views/notify'
], function(jQuery, Backbone, Marionette, App, config, NotifyView){

    App.module("Notify", {

        startWithParent: true,

        define: function(Notify, App, Backbone, Marionette, $, _){

            var NotifyModel = Backbone.Model.extend();

            var defaultSettings = {
                text: "Default text",
                showTime: 3000,
                isAutoHide: true,
                withCloseBtn: true,

                //success (green)
                //error (red)
                type: 'success'
            }

            var Controller = {
                showNotify: function( options ){
                    var settings = $.extend(_.clone(defaultSettings), options);
                    var notifyModel = new NotifyModel(settings);
                    var notifyView = new NotifyView({model:notifyModel});
                    $('#notify-container').append(notifyView.$el);
                    notifyView.$el.addClass('animated fadeInDown');

                    if( settings.isAutoHide ){
                        setTimeout(function(){
                            notifyView.animateClose();
                        }, settings.showTime);
                    }
                },

                showNotifySide: function( options ){
                    var settings = $.extend(_.clone(defaultSettings), options);
                    var notifyModel = new NotifyModel(settings);
                    var notifyView = new NotifyView({model:notifyModel});
                    $('#notify-container-side').append(notifyView.$el);
                    notifyView.$el.addClass('animated fadeInDown');

                    if( settings.isAutoHide ){
                        setTimeout(function(){
                            notifyView.animateClose();
                        }, settings.showTime);
                    }
                },

                getNotify: function(options){
                    var notifyModel = new NotifyModel(options);
                    var notifyView = new NotifyView({model:notifyModel});
                    return notifyView;
                },

                clearAllNotice: function(){
                    $('#notify-container').html('');
                }
            }

            var API = {
                showNotify: function(options){
                    Controller.showNotify(options);
                },

                getNotify: function(){
                    return Controller.getNotify(options);
                },

                clearAllNotice: function(){
                    return Controller.clearAllNotice();
                },

                showNotifySide: function(options){
                    Controller.showNotifySide(options);
                }
            }

            Notify.API = API;

            App.commands.setHandler(config.commands['notify:showNotify'], function( options ){
                return API.showNotify( options );
            })
            App.commands.setHandler(config.commands['notify:clearAllNotice'], function(){
                return API.clearAllNotice();
            })

            App.commands.setHandler(config.commands['notify:showNotify:side'], function( options ){
                return API.showNotifySide( options );
            })

        }
    })

})