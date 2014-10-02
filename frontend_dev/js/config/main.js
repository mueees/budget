define([], function(){

    var serverConfig = Budget || {};

    return {
        data: {
            user: {
                email: serverConfig.user.email,
                id: serverConfig.user.id
            },
            db: 'local'
        },
        reqres: {

            /*models*/
            'model:entity': 'model:entity',
            'collection:entity': 'collection:entity',
            'user:entity': 'user:entity',
            'transaction:entity' : 'transaction:entity',
            'transaction:collection:entity': 'transaction:collection:entity',
            'tag:entity': 'tag:entity',
            'tag:collection:entity': 'tag:collection:entity',
            'statistic:total:entity': 'statistic:total:entity',
            'statistic:transactionList:entity': 'statistic:transactionList:entity',
            'statistic:totalByTag:entity': 'statistic:totalByTag:entity',

            'notice:get': 'notice:get',
            'notice:get:prompt' : 'notice:get:prompt',
            'date:get:period': 'date:get:period',

            'service:db:getChangingData': 'service:db:getChangingData',
            'service:db:updateTagsId': 'service:db:updateTagsId',
            'service:db:resetTagEditLabel': 'service:db:resetTagEditLabel',
            'service:db:resetTransactionEditLabel': 'service:db:resetTransactionEditLabel',
            'service:db:updateTransactionsId': 'service:db:updateTransactionsId',
            'service:db:removeRemovedTransactions': 'service:db:removeRemovedTransactions',
            'service:db:removeRemovedTag': 'service:db:removeRemovedTag',
            'service:db:removeTagById': 'service:db:removeTagById',
            'service:db:removeTransactionById': 'service:db:removeTransactionById',
            'service:db:editOrCreateTag': 'service:db:editOrCreateTag',
            'service:db:editOrCreateTransaction': 'service:db:editOrCreateTransaction',
            'service:db:updateTagIdInTransactions': 'service:db:updateTagIdInTransactions'
        },

        storage: {
            "lastUpdate": 'lastUpdate'
        },

        commands: {
            'main:enable': 'main:enable',
            'main:disable': 'main:disable',

            'notify:showNotify': 'notify:showNotify',
            'notify:showNotify:side': 'notify:showNotify:side',
            'notify:clearAllNotice': 'notify:clearAllNotice',
            'notify:clearAllNotify:side': 'notify:clearAllNotify:side',

            'menu:set': 'menu:set',
            'menu:open': 'menu:open'
        },

        channels: {
            'date:change': 'date:change',
            'sync': 'sync'
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
            },

            sync: {
                clientServer: '/api/sync/clientserver',
                serverClient: '/api/sync/serverclient'
            }


        },

        showLog: true
    }

})