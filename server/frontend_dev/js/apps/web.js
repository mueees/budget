require([
    'app',
    'bootstrap',

    /*modules*/
    'modules/log/module',
    'modules/widget/module',
    'modules/notice/module',
    'modules/notify/module',

    /*main modules*/
    'apps/landing/module'

], function(App){
    App.start();
});