define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'app',
    'config',

    /*modules*/
    'modules/log/module'
], function(jQuery, _, Backbone, Marionette, App, config){

    App.module("Service", {

        startWithParent: true,

        define: function( Service, App, Backbone, Marionette, $, _ ){

            var log = App.reqres.request('getLog', "Service.Url");
            var Router = Marionette.AppRouter.extend({});
            var router = new Router();

            var controller = {

                /*set*/
                setQueryParam: function(queryName, value){
                    //строим новый url и перенаправляем
                    var total = Backbone.history.getTotal();
                    var query = total.query;
                    delete query[queryName];
                    if(value){
                        query[queryName] = value;
                    }
                    App.navigate(router.toFragment(total.routeString, query), {
                        trigger: false
                    });
                },

                /**
                * {params} Obj
                 * {
                 *     name: value
                 * }
                * */
                setQueryParams: function(params){
                    var isObj = _.isObject(params);
                    if(!isObj) return false;

                    var total = Backbone.history.getTotal();
                    var query = total.query;
                    _.each(params, function(queryValue, queryName){
                        delete query[queryName];
                        if(queryValue){
                            query[queryName] = queryValue;
                        }
                    })

                    App.navigate(router.toFragment(total.routeString, query), {
                        trigger: false
                    });
                },

                /*get*/
                getUrlWithoutHash: function(){
                    return window.location.origin + window.location.pathname;
                },
                getTotal: function(){
                    return Backbone.history.getTotal();
                }
            }

            /*set*/
            /*
            устанавливает или меняет если уже такой существует queryName соответствующее значение
            * */
            App.commands.setHandler(config.commands['service:url:setQueryParam'], function(queryName, value){
                return controller.setQueryParam(queryName, value);
            })
            App.commands.setHandler(config.commands['service:url:setQueryParams'], function(params){
                return controller.setQueryParams(params);
            })

            /*get*/
            App.reqres.setHandler(config.reqres['service:url:getTotal'], function(){
                return controller.getTotal();
            })
            App.reqres.setHandler(config.reqres['service:url:getUrlWithoutHash'], function(){
                return controller.getUrlWithoutHash();
            })
            App.reqres.setHandler(config.reqres['service:url:getQueryParam'], function(param){
                if( !param ) return null;
                var total = controller.getTotal();
                return total['query'][param] || null;
            })

            App.on('initialize:after', function(){
                var total = controller.getTotal();
                Backbone.history.loadUrl(router.toFragment('#' + total.routeString, total.query));
            })

            log('Initialized');
        }
    })

})