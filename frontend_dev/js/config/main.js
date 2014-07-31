define([], function(){

    var serverConfig = Budget || {};

    return {
        data: {
            user: {
                email: serverConfig.user.email,
                id: serverConfig.user.id
            },
            db: 'ajax'
        },
        reqres: {

            /*models*/
            'model:entity': 'model:entity',
            'collection:entity': 'collection:entity',
            'user:entity': 'user:entity',
            'transaction:entity' : 'transaction:entity',
            'transaction:collection:entity': 'transaction:collection:entity',
            'tag:entity': 'tag:entity',
            'tag:collection:entity': 'tag:collectWion:entity',
            'statistic:total:entity': 'statistic:total:entity',
            'statistic:transactionList:entity': 'statistic:transactionList:entity',

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

            'menu:set': 'menu:set',
            'menu:open': 'menu:open'
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
            transactionGetById: '/api/transaction/getById',

            statistic: {
                total: '/api/transaction/total',
                totalByTag: '/api/transaction/totalByTag',
                listTransactions: "/api/transaction/list"
            }


        },

        showLog: true
    }

})