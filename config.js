requirejs.config({
    baseUrl: '.',
    waitSeconds : 3,
    paths: {
        'apps' : 'frontend_dev/js/apps',
        'app' : 'frontend_dev/js/apps/app',
        'vendor': 'frontend_dev/js/vendor',
        'modules': 'frontend_dev/js/modules',
        'extends': 'frontend_dev/js/extends',
        'entities': 'frontend_dev/js/entities',
        widgetBase: 'frontend_dev/js/modules/widget/widgets/base/',

        jquery: "frontend_dev/js/vendor/libs/jquery",
        underscore: "frontend_dev/js/vendor/libs/underscore",
        text: "frontend_dev/js/vendor/libs/require/text",

        backbone_clear: "frontend_dev/js/vendor/libs/backbone/backbone_clear",
        backbone: "frontend_dev/js/vendor/libs/backbone/backbone",
        marionette: "frontend_dev/js/vendor/libs/marionette",
        "backbone.wreqr": "frontend_dev/js/vendor/libs/backbone/backbone.wreqr",
        "backbone.server": "frontend_dev/js/vendor/libs/backbone/backbone.server",
        "backbone.babysitter": "frontend_dev/js/vendor/libs/backbone/backbone.babysitter",
        "backbone.queryparam": "frontend_dev/js/vendor/libs/backbone/backbone.queryparam",
        "backbone.routefilter": "frontend_dev/js/vendor/libs/backbone/backbone.routefilter",
        "backbone.validation": "frontend_dev/js/vendor/libs/backbone/backbone.validation",
        "backbone.stickit": "frontend_dev/js/vendor/libs/backbone/backbone.stickit",
        "backbone.syphon": "frontend_dev/js/vendor/libs/backbone/backbone.syphon",
        bootstrap: "frontend_dev/js/vendor/libs/bootstrap/js/bootstrap.min",
        raphael: "frontend_dev/js/vendor/libs/raphael.min",
        async: "frontend_dev/js/vendor/libs/async",
        morris: "frontend_dev/js/vendor/libs/morris.min",
        idb: "frontend_dev/js/vendor/libs/idb",

        /*plugins*/
        moment: "frontend_dev/js/vendor/plugins/moment.min",
        cookie: "frontend_dev/js/vendor/plugins/jquery.cookie",
        config: "frontend_dev/js/config/main"
    },
    shim: {
        /*libs*/
        jquery: {
            exports: "jQuery"
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: "Backbone"
        },
        morris: {
            deps: ['jquery', 'raphael'],
            exports: "Morris"
        },
        bootstrap: ['jquery']
    },
    urlArgs: "no-cache=" + (new Date()).getTime()
});