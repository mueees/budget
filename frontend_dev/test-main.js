var tests = [];

for (var file in window.__karma__.files) {

    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/spec\.js$/.test(file)) {
            console.log(file)
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {

        /*libs*/
        jquery: "libs/jquery/jquery",
        underscore: "libs/underscore/underscore",
        backbone: "libs/backbone/backbone",
        wreqr: "libs/backbone/backbone.wreqr",
        bootstrap: "libs/bootstrap/js/bootstrap.min",
        jquery_ui: "libs/jquery/jquery.ui.custom.min",
        sockJs: "libs/sockJs/sockJs",
        d3: "libs/d3/d3.v3.min",
        sankey: "libs/d3/sankey",
        morris: "libs/morris/js/morris",
        raphael: "libs/raphael/raphael.min",
        jasmine: 'libs/jasmine/jasmine',
        jasmineHtml: 'libs/jasmine/jasmine-html',
        jasmineJquery : "libs/jasmine/jasmine-jquery",
        sinon: "libs/sinon/sinon",
        goog: "libs/require/goog",
        propertyParser: "libs/require/propertyParser",
        async: "libs/require/async",

        /*plugins*/
        /*plugins: "plugins",*/
        horizontalSwitch: "plugins/jquery.horizontalSwitch",
        cookie: "plugins/jquery.cookie",
        validate: "plugins/jquery.validate",
        datePicker: "plugins/jquery.datepicker/jquery.datepicker",
        jscrollpane: "plugins/jscrollpane/jquery.jscrollpane.min",
        notice: "plugins/notice/notice",
        overlay: "plugins/overlay/views/overlay",
        preload: "plugins/preload/views/preload",
        moment: "plugins/moment.min",
        partImage: "plugins/partImage/partImage",
        canvasPreview: "plugins/partImage/canvasPreview",
        mCustomScrollbar: "plugins/mCustomScrollbar/jquery.mCustomScrollbar.min",
        mouseWheel: "plugins/jquery.mouseWheel",
        icheck: "plugins/jquery.icheck",
        tablesorter: 'plugins/jquery.tablesorter',
        utility: 'plugins/utility',
        multiSelect: 'plugins/jquery.multiSelect',

        application: "application",
        sections: "sections",

        /*section module*/
        sidebar : "sections/sidebar/module",

        /*Project path*/
        pm: "sections/projects/project-managment",
        pm_projects: "sections/projects/project-managment/pages/projects",
        pm_project: "sections/projects/project-managment/pages/project",

        /*Record Mode path*/
        recordMode: "sections/record-mode",

        /*extend*/
        backbone_extend: 'plugins/extend/backbone/extend',

        "text": "libs/require/text",

        defaults: "js/default"
    },

    shim: {

        /*libs*/
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },

        wreqr: {
            deps: ["jquery", 'underscore', 'backbone'],
            exports: "Backbone"
        },

        sockJs: {
            exports: "SockJS"
        },
        jquery: {
            exports: "jQuery"
        },
        bootstrap: ['jquery'],
        jquery_ui: ['jquery'],
        d3: {
            exports: "d3"
        },
        sankey: {
            deps: ['d3'],
            exports: "d3"
        },
        morris: {
            deps: ['jquery', 'd3', 'raphael'],
            exports: "Morris"
        },
        jasmine: {
            exports: "jasmine"
        },
        jasmineHtml:{
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        jasmineJquery:{
            deps: ['jquery','jasmine']
        },
        sinon: {
            exports: "sinon"
        },

        /*plugins*/
        horizontalSwitch: ['jquery'],
        cookie: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        validate: ['jquery'],
        datePicker: ['jquery'],
        overlay: ['jquery', 'backbone'],
        preload: ['jquery', 'backbone'],
        partImage: ['jquery'],
        canvasPreview: ['jquery'],
        mouseWheel: ['jquery'],
        mCustomScrollbar: ['jquery', 'mouseWheel'],
        jscrollpane: ['jquery'],
        icheck: ['jquery'],
        tablesorter: ['jquery'],
        multiSelect: {
            deps: ['jquery']
        },
        backbone_extend: {
            deps: ['backbone']
        },

        defaults: ['jquery', 'horizontalSwitch']

    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});