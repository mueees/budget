define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout',

    /*controllers*/
    './controllers/header/index',
    './controllers/details/index',
    './controllers/main/index'
], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Report", {

        startWithParent: false,

        define: function( Report, App, Backbone, Marionette, $, _ ){

            var log;

            var configModule = {
                defaultTab: 'main',
                allowedTab: ['main', 'details']
            }

            var Controller = Marionette.Controller.extend({

                initialize: function(options){
                    this.region = options.region;
                    this.layout = new Layout();
                    this.region.show(this.layout);
                },

                start: function(tabName){
                    if( !tabName ){
                        this.redirectToDefaultTab();
                        return;
                    }else{
                        this.tabName = this.getTabName(tabName);

                        if( !this.headerController ) this.startHeaderController();
                        this.startSubController();
                    }
                },

                startHeaderController: function(){
                    //contain tab view and filter view
                    this.headerController = new Report.Header.Controller({
                        region: this.layout.header,
                        tabName: this.tabName
                    })
                },

                startSubController: function(){
                    if( this.subController ) this.subController.close();

                    App.execute(config.commands['notify:clearAllNotice']);

                    var region = this.layout.main;

                    switch (this.tabName){
                        case configModule.allowedTab[0]:
                            this.subController = new Report.Main.Controller({
                                region: region
                            });
                            break;
                        case configModule.allowedTab[1]:
                            debugger
                            this.subController = new Report.Details.Controller({
                                region: region
                            });
                            break;
                        default:
                            this.subController = new Report.Main.Controller({
                                region: region
                            });
                                break;
                    }

                    this.subController.show();

                },

                getTabName: function(tabName){
                    if( this.isAllowedTabName(tabName) ){
                        return tabName;
                    }else{
                        return configModule.defaultTab;
                    }
                },

                isAllowedTabName: function(tabName){
                    var result = false;
                    _.each( configModule.allowedTab, function(tab){
                        if( tab == tabName ){
                            result = true;
                            return;
                        }
                    })
                    return result;
                },

                redirectToDefaultTab: function(){
                    this.tabName = configModule.defaultTab;
                    App.navigate("#report/" + this.tabName, {trigger: true});
                },

                onClose: function(){
                    if(this.subController) this.subController.close();
                }

            });

            var API  = {

                report: function(tagName){

                    if( !config.data.user.email ){
                        App.navigate('#landing', {trigger: true});
                    }

                    Report.controller.start(tagName);
                },

                /*Инициализация перед стартом*/
                start: function(){
                    App.execute(config.commands['main:enable']);
                    Report.controller = new Controller({
                        region: App.content
                    });
                    log('create controller');
                },

                /*Остановка модуля*/
                stop: function(){
                    if(Report.controller) {
                        log('delete controller');
                        Report.controller.close();
                        delete Report.controller;
                    }
                }
            }

            Report.start = API.start;
            Report.stop = API.stop;
            Report.report = API.report;

            App.on('initialize:before', function(){
                log = App.reqres.request("getLog", 'Report');
            })
        }
    })


})