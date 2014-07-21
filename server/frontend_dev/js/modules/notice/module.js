define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',
    './view/NoticeView'
], function(jQuery, Backbone, Marionette, App, config, NoticeView){

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

                /*type of icon*/
                icon: "errorWhite",

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
                showCloseButton: false,

                /*button (first) text*/
                showFirstBtn: true,
                firstBtnText: "Ok",
                classFirstBtn: "button color-btn-grey size-btn-big decline",
                iconFirstBtn: false,
                classFirstIcon: "icon-guide-orange-button",

                /*button (second)*/
                showSecondBtn: false,
                secondBtnText: "Cancel",
                classSecondBtn: "button color-btn-orange accept",
                iconSecondBtn: false,
                classSecondIcon: "icon-guide-orange-button"

            }

            var Controller = Marionette.Controller.extend({
                getNotice: function(options){
                    var opts = _.extend(_.clone(defaults), options);
                    return new NoticeView( opts );
                }
            });

            App.addInitializer(function(){
                log = App.reqres.request("getLog", 'Notice');
                var controller = new Controller();

                App.reqres.setHandler(config.reqres["notice:get"], function(options){
                    return controller.getNotice(options)
                });

                //log("Initialized");
            })
        }
    })

})
