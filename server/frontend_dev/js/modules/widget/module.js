define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'config',

    /*widgets*/
    './widgets/base/index',

    //auth
    './widgets/auth/sign/index',

    //data
    './widgets/date/index',

    //tag
    './widgets/tagList/index',

    //transaction
    './widgets/transaction/add/index',
    './widgets/transaction/list/index',

    //statistic
    './widgets/statistics/totals/index',
    './widgets/statistics/totalByTag/index'

], function(jQuery, Backbone, Marionette, App, config){

    App.module("Widget", {

        startWithParent: true,

        define: function( Widget, App, Backbone, Marionette, $, _ ){}
    })

})