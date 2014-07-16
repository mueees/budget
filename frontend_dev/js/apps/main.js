require([
    'apps/projects/projects_app',
    'bootstrap',

    /*entities*/
    'entities/base',
    'entities/device',
    'entities/filter',
    'entities/user',
    'entities/project',
    'entities/timezone',
    'entities/role',

    /*services*/
    'services/Page',
    'services/Url',
    'services/Storage',
    'services/Error',

    /*modules*/
    'modules/raven/module',
    'modules/log/module',
    'modules/block/module',
    'modules/widget/module',
    'modules/settings/module',
    'modules/component/module',
    'modules/notify/module',
    'modules/notice/module',
    'modules/overlay/module',
    'modules/sidebar-menu/module',
    'modules/sidebar/module',
    'modules/menu-product/module',

    /*projects modules*/
    'apps/settings/modules/account/module'

], function(App){
    App.start();
});