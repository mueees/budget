define([], function(){

    var serverConfig = Budget || {};

    return {
        data: {
            user: {
                email: serverConfig.user.email,
                id: serverConfig.user.id
            }
        },
        reqres: {

            /*models*/
            'model:entity': 'model:entity',
            'collection:entity': 'collection:entity',
            'user:entity': 'user:entity',
            'transaction:entity' : 'transaction:entity',
            'tag:entity': 'tag:entity',
            'tag:collection:entity': 'tag:collection:entity',
            'statistic:total:entity': 'statistic:total:entity',

            'notice:get': 'notice:get',
            'notice:get:prompt' : 'notice:get:prompt',
            'date:get:period': 'date:get:period'
        },

        commands: {
            'main:enable': 'main:enable',
            'main:disable': 'main:disable',

            'notify:showNotify': 'notify:showNotify',
            'notify:showNotify:side': 'notify:showNotify:side',
            'notify:clearAllNotice': 'notify:clearAllNotice',

            'menu:set': 'menu:set'
        },

        channels: {
            'date:change': 'date:change'
        },

        api: {
            signup: '/api/user/signup',
            signin: '/api/user/signin',
            logout: "api/user/logout",

            //tag
            tagCreate: '/api/tag/create',
            tagRemove: '/api/tag/remove',
            tagGet: '/api/tag/get',
            tagEdit: '/api/tag/edit',

            //transaction
            transactionCreate: '/api/transaction/create',
            transactionRemove: '/api/transaction/remove',
            transactionEdit: '/api/transaction/edit',

            statistic: {
                total: '/api/transaction/total',
                totalByTag: '/api/transaction/totalByTag'
            }


        },

        showLog: true
    }

})