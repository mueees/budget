requirejs.config({
    waitSeconds : 15,
    paths: {
        app: "frontend_dev/js/apps/app",
        jquery: "frontend_dev/vendor/libs/jquery",
        underscore: "frontend_dev/vendor/libs/underscore",
        text: "frontend_dev/vendor/libs/require/text",

        backbone_clear: "frontend_dev/vendor/libs/backbone/backbone_clear",
        backbone: "frontend_dev/vendor/libs/backbone/backbone",
        marionette: "frontend_dev/vendor/libs/marionette",
        "backbone.wreqr": "frontend_dev/vendor/libs/backbone/backbone.wreqr",
        "backbone.babysitter": "frontend_dev/vendor/libs/backbone/backbone.babysitter",
        "backbone.queryparam": "frontend_dev/vendor/libs/backbone/backbone.queryparam",
        "backbone.routefilter": "frontend_dev/vendor/libs/backbone/backbone.routefilter",
        "backbone.validation": "frontend_dev/vendor/libs/backbone/backbone.validation",
        "backbone.stickit": "frontend_dev/vendor/libs/backbone/backbone.stickit",
        "backbone.syphon": "frontend_dev/vendor/libs/backbone/backbone.syphon",
        bootstrap: "frontend_dev/vendor/libs/bootstrap/js/bootstrap.min",

        /*plugins*/
        moment: "frontend_dev/vendor/plugins/moment.min",
        cookie: "frontend_dev/vendor/plugins/jquery.cookie",
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

        /*plugins*/
        cookie: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        bootstrap: ['jquery']
    },
    urlArgs: "no-cache=" + (new Date()).getTime()
});