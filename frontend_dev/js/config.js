requirejs.config({
    baseUrl: 'js/',
    waitSeconds : 3,
    paths: {
        'app' : 'apps/app',
        'vendor': 'vendor',
        'modules': 'modules',
        widgetBase: 'modules/widget/widgets/base/',

        jquery: "vendor/libs/jquery",
        underscore: "vendor/libs/underscore",
        text: "vendor/libs/require/text",

        backbone_clear: "vendor/libs/backbone/backbone_clear",
        backbone: "vendor/libs/backbone/backbone",
        marionette: "vendor/libs/marionette",
        "backbone.wreqr": "vendor/libs/backbone/backbone.wreqr",
        "backbone.babysitter": "vendor/libs/backbone/backbone.babysitter",
        "backbone.mobile": "vendor/libs/backbone/backbone.mobile",
        "backbone.server": "vendor/libs/backbone/backbone.server",
        "backbone.queryparam": "vendor/libs/backbone/backbone.queryparam",
        "backbone.routefilter": "vendor/libs/backbone/backbone.routefilter",
        "backbone.validation": "vendor/libs/backbone/backbone.validation",
        "backbone.stickit": "vendor/libs/backbone/backbone.stickit",
        "backbone.syphon": "vendor/libs/backbone/backbone.syphon",
        idb: "vendor/libs/idb",
        async: "vendor/libs/async",
        storage: "vendor/libs/storage",


        persistence: "vendor/libs/persistense/persistence",
        persistence_clear: "vendor/libs/persistense/persistence_clear",
        "persistence.store.sql": "vendor/libs/persistense/persistence.store.sql",
        "persistence.store.websql": "vendor/libs/persistense/persistence.store.websql",

        bootstrap: "vendor/libs/bootstrap/js/bootstrap.min",
        raphael: "vendor/libs/raphael.min",
        morris: "vendor/libs/morris.min",

        /*plugins*/
        moment: "vendor/plugins/moment.min",
        cookie: "vendor/plugins/jquery.cookie",
        config: "config/main"
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
        bootstrap: ['jquery'],

        persistence: {
            export: "persistence"
        },

        persistence_clear: {
            export: "persistence"
        },

        "persistence.store.sql": {
            deps: ['persistence_clear']
        },
        "persistence.store.websql": {
            deps: ['persistence_clear']
        }

    },
    urlArgs: "no-cache=" + (new Date()).getTime()
});