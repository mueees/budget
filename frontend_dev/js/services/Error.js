define([
    'jquery',
    'backbone',
    'marionette',
    'apps',
    'config',

    /*modules*/
    'modules/log/module'
], function(jQuery, Backbone, Marionette, App, config){

    App.module("Service.Error", {

        startWithParent: true,

        define: function( Storage, App, Backbone, Marionette, $, _ ){

            var log = App.reqres.request('getLog', "Service.Error");
            var defaultErrorMessage = "Server error. Please try again later.";

            var Controller = Marionette.Controller.extend({
                clearXhr: function(xhr){
                    var response,
                        errors;

                    //если нет респонса, возвращаем стандартную ошибку
                    try{ response = JSON.parse(xhr.responseText) }catch(e){
                        response = defaultErrorMessage;
                    }
                    errors = ( "errors" in response );
                    if(!errors) response = defaultErrorMessage;
                    return response;
                },

                toString: function(xhr){
                    var response;

                    //если нет респонса, возвращаем стандартную ошибку
                    try{ response = JSON.parse(xhr.responseText) }catch(e){return defaultErrorMessage};

                    //если в респонсе нет поля errors, возвращаем стандартную ошибку
                    var errors = ( "errors" in response );
                    if(!errors) return defaultErrorMessage;

                    var errorsIsObj = _.isObject(response["errors"]);
                    var errorsIsString = _.isString(response["errors"]);

                    if(errorsIsString){
                        return response["errors"];
                    }else if(errorsIsObj){
                        return this._getStringByObject(response["errors"]);
                    }else{
                        return defaultErrorMessage;
                    }

                },

                _getStringByObject: function(objError){
                    var result = "";
                    for( var key in objError ){
                        result += key + ": " + objError[key];
                    }
                    return result;
                }
            });

            var c = new Controller();
            App.reqres.setHandler(config.reqres['service:error:toString'], function(xhr){
                return c.toString(xhr);
            });
            App.reqres.setHandler(config.reqres['service:error:clearXhr'], function(xhr){
                return c.clearXhr(xhr);
            });

            log('Initialized');
        }
    })

})