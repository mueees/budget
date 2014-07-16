requirejs.config({
    baseUrl: '/static/',
    waitSeconds : 15,
    paths: {
        /*path*/
        libs: "js_marionette/vendor/libs",

        apps: 'js_marionette/apps',
        helpers: 'js_marionette/helpers',
        modules: 'js_marionette/modules',
        entities: 'js_marionette/entities',
        services: 'js_marionette/services',
        mixins: 'js_marionette/mixins',

        /*libs*/
        jquery: "js_marionette/vendor/libs/jquery",
        underscore: "js_marionette/vendor/libs/underscore",
        text: "js_marionette/vendor/libs/require/text",
        backbone_clear: "js_marionette/vendor/libs/backbone/backbone_clear",
        backbone: "js_marionette/vendor/libs/backbone/backbone",
        marionette: "js_marionette/vendor/libs/marionette",
        "backbone.wreqr": "js_marionette/vendor/libs/backbone/backbone.wreqr",
        "backbone.babysitter": "js_marionette/vendor/libs/backbone/backbone.babysitter",
        "backbone.queryparam": "js_marionette/vendor/libs/backbone/backbone.queryparam",
        "backbone.routefilter": "js_marionette/vendor/libs/backbone/backbone.routefilter",
        "backbone.validation": "js_marionette/vendor/libs/backbone/backbone.validation",
        "backbone.stickit": "js_marionette/vendor/libs/backbone/backbone.stickit",
        "backbone.syphon": "js_marionette/vendor/libs/backbone/backbone.syphon",
        bootstrap: "js_marionette/vendor/libs/bootstrap/js/bootstrap.min",
        d3: "js_marionette/vendor/libs/d3.v3.min",
        raphael: "js_marionette/vendor/libs/raphael.min",
        goog: "js_marionette/vendor/libs/require/goog",
        async: "js_marionette/vendor/libs/require/async",
        propertyParser: "js_marionette/vendor/libs/require/propertyParser",
        sockJs: "js_marionette/vendor/libs/sockJs/sockJs",

        /*plugins*/
        multiSelect: 'js_marionette/vendor/plugins/jquery.multiSelect',
        moment: "js_marionette/vendor/plugins/moment.min",
        datePicker: "js_marionette/vendor/plugins/jquery.datepicker",
        morris: "js_marionette/vendor/plugins/morris/js/morris",
        mCustomScrollbar: "js_marionette/vendor/plugins/mCustomScrollbar/jquery.mCustomScrollbar.min",
        mouseWheel: "js_marionette/vendor/plugins/jquery.mouseWheel",
        partImage: "js_marionette/vendor/plugins/partImage/partImage",
        icheck: "js_marionette/vendor/plugins/jquery.icheck",
        cookie: "js_marionette/vendor/plugins/jquery.cookie",
        raven: "js_marionette/vendor/libs/raven/raven",

        config: "js_marionette/config/main"
    },
    shim: {

        /*libs*/
        jquery: {
            exports: "jQuery"
        },
        bootstrap: ['jquery'],
        d3: {
            exports: "d3"
        },
        underscore: {
            exports: "_"
        },
        sockJs: {
            exports: "SockJS"
        },
        /*plugins*/
        cookie: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        multiSelect: {
            deps: ['jquery']
        },
        datePicker: {
            deps: ['jquery']
        },
        morris: {
            deps: ['jquery', 'd3', 'raphael'],
            exports: "Morris"
        },
        mouseWheel: ['jquery'],
        mCustomScrollbar: ['jquery', 'mouseWheel'],
        partImage: ['jquery'],

        raven: {
            exports: 'Raven'
        }
    },
    urlArgs: "no-cache=" + (new Date()).getTime()
});