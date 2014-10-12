require([
    'app',
    'bootstrap',

    /*entities*/
    'entities/base',
    'entities/user',
    'entities/tag',
    'entities/transaction',
    'entities/statistics/total',
    'entities/statistics/totalByTag',
    'entities/statistics/transactionsList',

    /*modules*/
    'modules/log/module',
    'modules/service/module',
    'modules/widget/module',
    'modules/component/module',
    'modules/notice/module',
    'modules/notify/module',
    'modules/header/module',
    'modules/menu/module',
    'modules/behaviors/module',

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