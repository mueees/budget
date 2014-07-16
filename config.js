requirejs.config({
    /*baseUrl: '/budget/frontend_dev/js',*/
    waitSeconds : 15,
    paths: {},
    shim: {},
    urlArgs: "no-cache=" + (new Date()).getTime()
});