require([
    'app',
    'bootstrap',

    /*entities*/
    'entities/base',
    'entities/user',
    'entities/tag',
    'entities/transaction',

    /*modules*/
    'modules/log/module',
    'modules/widget/module',
    'modules/notice/module',
    'modules/notify/module',
    'modules/header/module',
    'modules/menu/module',

    /*main modules*/
    'apps/route/module',
    'apps/main/module',
    'apps/report/module',
    'apps/tags/module',
    'apps/landing/module',
    'apps/transaction/module'

], function(App){
    App.start();
});