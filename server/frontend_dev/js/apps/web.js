require([
    'app',
    'bootstrap',

    /*modules*/
    'modules/log/module',
    'modules/notice/module',
    'modules/notify/module'

], function(App){
    App.start();
});