define([
    'jquery',
    'backbone',
    'marionette',
    'apps/baseApp',
    'config',

    /*modules*/
    'modules/log/module'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Service", {

        startWithParent: true,

        define: function( Service, App, Backbone, Marionette, $, _ ){

            //todo: вынести дефолтную страницу "reports.standard.index" в глобальный конфиг
            var currentPage = ZEOINSIGHT.config.currentPage || "reports.standard.index";

            var log = App.reqres.request('getLog', "Service.Page");

            var controller = {
                getCurrentPage: function(){

                    //todo: вынести название страниц в конфиг
                    var result = "";
                    if( controller.isAnalyticsPage() ){
                        result = 'analytics';
                    }else if( controller.isConversionPage() ){
                        result = 'conversion';
                    }else if( controller.isProjectsPage() ){
                        result = 'projects';
                    }else if(controller.isSettingsPage()){
                        result = 'settings';
                    }else{
                        result = 'settings';
                    }

                    return result;
                },

                isAnalyticsPage: function(){
                    return ( currentPage == "reports.standard.index" ) ? true : false;
                },

                isConversionPage: function(){
                    return ( currentPage == "reports.standard.index.conversion" ) ? true : false;
                },

                isProjectsPage: function(){
                    return ( currentPage == 'products.list' ) ? true : false;
                },

                getProductId: function(){
                    return config.data.productId;
                },

                isSettingsPage: function(){
                    return ( currentPage == 'auth.settings' ) ? true : false;
                }
            }

            App.reqres.setHandler(config.reqres['service:getCurrentPage'], function(){
                return controller.getCurrentPage();
            })

            App.reqres.setHandler(config.reqres["service:getProductId"], function(){
                return controller.getProductId();
            })

            log('Initialized');
        }
    })

})