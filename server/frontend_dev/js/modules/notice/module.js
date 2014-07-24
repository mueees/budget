define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    './view/NoticeView',
    './view/NoticePromptView',
], function(jQuery, Backbone, Marionette, App, config, NoticeView, NoticePromptView){

    App.module("Notice", {

        startWithParent: true,

        define: function( Map, App, Backbone, Marionette, $, _ ){

            var log;
            var defaults = {

                /*color notice*/
                // error
                // alert
                // info
                status: "error",

                /*title notice*/
                title: "",

                /*general text*/
                text: "",

                /*add class*/
                /*
                 fill-color
                 white-color
                 */
                addCustomClass: "",

                /*close buttons*/
                showCloseButton: true,

                isShowCloseOnFooter: true,

                textDefault: "Cancel",

                textPrimary: "Ok",

                isCloseAuto: true,

                placeholder: ""

            }

            var Controller = Marionette.Controller.extend({
                getNotice: function(options){
                    var opts = _.extend(_.clone(defaults), options);
                    return new NoticeView( opts );
                },

                getNoticePrompt: function(options){
                    var opts = _.extend(_.clone(defaults), options);
                    return new NoticePromptView( opts );
                }
            });

            App.addInitializer(function(){
                log = App.reqres.request("getLog", 'Notice');
                var controller = new Controller();

                App.reqres.setHandler(config.reqres["notice:get"], function(options){
                    return controller.getNotice(options)
                });

                App.reqres.setHandler(config.reqres["notice:get:prompt"], function(options){
                    return controller.getNoticePrompt(options)
                });


            })
        }
    })

})
