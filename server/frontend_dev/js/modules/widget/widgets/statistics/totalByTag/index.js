define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout',
    './views/SignView'

], function(jQuery, Backbone, Marionette, App, config, Layout, SignView){

    App.module("Widget.TotalByTag", {

        startWithParent: true,

        define: function( TotalByTag, App, Backbone, Marionette, $, _ ){
            var log;

            TotalByTag.Controller = Marionette.Controller.extend({
                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Collection.Sign');

                    _.bindAll(this, "successModelUpdate", 'processError');

                    this.region = options.region;
                    this.model = App.reqres.request(config.reqres['statistic:totalByTag:entity']);
                    this.view = null;

                    log('Initialized');
                },

                show: function(options){
                    this.layout = new Layout({
                        model: this.model
                    });
                    this.region.show(this.layout);
                    this.syncModel();
                },

                showView: function(){
                    this.view = new SignView({
                        model: this.model
                    });
                    this.layout.main.show(this.view);
                },

                setData: function(options){
                    //todo: возможно тут нужна какая-то валидация входных данных, граничных значений
                    this.model.set(options, {silent: true});
                    this.syncModel();
                },

                syncModel: function(){
                    var _this = this;
                    this.model.getData({
                        success: _this.successModelUpdate,
                        error: _this.processError
                    });
                },

                successModelUpdate: function(model){
                    var data = model.get('data');
                    if( data ){
                        if(!this.view) this.showView();
                    }else{
                        this.showErrorView();
                    }
                },

                processError: function(model, xhr, data){
                    var statusText;
                    try{
                        statusText = xhr.statusText;
                    }catch(e){
                        statusText = 'error';
                    }

                    if( statusText != "abort" ) this.showErrorView();
                },

                showErrorView: function(){
                    if( this.view ) {
                        this.view.close();
                        this.view = null;
                    }
                    var noDataView = new App.Component.NoData.View();
                    this.layout.main.show(noDataView);
                },

                onClose: function(){
                    this.model.abortAjax();
                    this.model = null;
                    this.region.close();
                }

            });

        }
    })

})