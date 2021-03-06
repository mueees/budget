define([
    'backbone',
    'marionette',

    'extends/ModalRegion'
], function(Backbone, Marionette, ModalRegion){

    var App = new Marionette.Application();
    var AppRouter = Marionette.AppRouter.extend({});
    App.router = new AppRouter();
    App.router.root = '/';

    var log;

    App.channels = {};
    App.channels.modules = {};
    App.channels.main = _.extend({}, Backbone.Events);
    App.channels.second = _.extend({}, Backbone.Events);

    App.behaviors = {};
    Marionette.Behaviors.behaviorsLookup = function() {
        return App.behaviors;
    }

    var trigger = Backbone.Events.trigger;

    App.channels.main.trigger = function(){
        console.log("main channel:");
        console.log(arguments);
        trigger.apply(App.channels.main, arguments);
    };

    App.channels.second.trigger = function(){
        console.log("second channel:");
        console.log(arguments);
        trigger.apply(App.channels.second, arguments);
    };

    App.on('initialize:after', function(){
        log = App.reqres.request("getLog", 'App');

        if( Backbone.history ){
            //не стартуем сразу, даем время модулям зависящим от
            //Навигации нормально инициализироваться

            Backbone.history.start();
        }
    });

    App.navigate = function(fragment, options){
        options = options || {};
        App.router.navigate(fragment, options);
    };

    App.redirect = function(url){
        log('redirect to: ' + url);
        window.location.href = url;
    };

    App.reload = function(){
        log('reload');
        window.location.reload();
    };

    App.reloadCurrentApp = function(){
        Backbone.history.loadUrl(Backbone.history.fragment);
    };

    App.registerChannel = function(name){
        if(App.channels.modules[name]) return App.channels.modules[name];

        App.channels.modules[name] = _.extend({}, Backbone.Events);
        return App.channels.modules[name];
    }

    App.deleteChannel = function(name){
        if(!App.channels.modules[name]) return false;
        App.channels.modules[name].off();
        delete App.channels.modules[name];
    }

    App.startSubApp = function(appName, args){
        var currentApp = App.module(appName);
        if (App.currentApp === currentApp){ return; }

        $('body').removeClass().addClass(currentApp.moduleName.toLowerCase());

        if (App.currentApp){
            App.currentApp.stop();
        }

        App.currentApp = currentApp;
        currentApp.start(args);
    };

    App.addRegions({
        body: "#body",
        modal: new ModalRegion({el: "#modal"})
    });

    return App;

})