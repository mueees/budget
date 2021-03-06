define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    './views/Layout'

], function(jQuery, Backbone, Marionette, App, config, Layout){

    App.module("Widget.Base", {

        startWithParent: true,

        define: function( Base, App, Backbone, Marionette, $, _ ){
            var log;

            Base.Controller = Marionette.Controller.extend({

                View: null,

                widgetName: 'BaseWidget',

                initialize: function(options){
                    log = App.reqres.request("getLog", 'Widget.Base');

                    _.bindAll(this, "successModelUpdate", 'processError');

                    this.region = options.region;
                    this.model = this.getModel();
                    this.model.set({
                        widgetName: this.widgetName
                    })
                    this.collection = this.getCollection();
                    this.layout = this.getLayout();
                    this.View = this.getView();
                    this.viewOptions = this.getViewOptions();
                    this.view = null;

                    log('Initialized');
                },

                getModel: function(){
                    return App.reqres.request(config.reqres['model:entity']);
                },

                getView: function(){},

                getViewOptions: function(){
                    return {};
                },

                subscribe: function(){},

                getLayout: function(){
                    return Layout;
                },

                getCollection: function(){
                    return null;
                },

                show: function(options){
                    this.layout = new Layout({
                        model: this.model
                    });
                    this.region.show(this.layout);
                },

                showView: function(){
                    this.view = new this.View({
                        model: this.model,
                        collection: this.collection,
                        viewOptions: this.viewOptions
                    });
                    this.layout.main.show(this.view);
                    this.subscribe();
                },

                setData: function(options){
                    this.model.set(options, {silent: true});
                    this.sync();
                },

                sync: function(){
                    var _this = this;
                    this.model.getData({
                        success: _this.successModelUpdate,
                        error: _this.processError
                    });
                },

                isSuccessUpdate: function(model){
                    var data = model.get('data');
                    if( data && data.length !== 0 ){
                        return true;
                    }else{
                        return false;
                    }
                },

                successModelUpdate: function(model){
                    if( this.isSuccessUpdate(model) ){
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