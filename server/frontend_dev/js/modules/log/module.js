define([
    'underscore',
    'marionette',
    'app',
    'config'
], function(_, Marionette, App, config){

    App.module("Log", {

        startWithParent: true,

        define: function( Log, App, Marionette, $, _ ){

            function getLogInstance(moduleName){
                var module = moduleName;
                return function (message){
                    if(!config.showLog) return false;
                    var isObject = _.isPlainObject(message);
                    if( isObject ){
                        console.log(module + ' : ');
                        console.log(message);
                    }else{
                        console.log(module + ' : ' + message);
                    }
                }
            }

            var controller = {
                getLog: function(moduleName){
                    return getLogInstance(moduleName);
                }
            }
            App.reqres.setHandler("getLog", controller.getLog);

        }
    })

})