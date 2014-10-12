define([], function(){

    var serverConfig = Budget || {};
    var prefix = serverConfig.data.prefix || "";
    var environment = serverConfig.data.environment;

    return {
        data: {
            prefix: prefix,
            user: {
                email: serverConfig.user.email,
                id: serverConfig.user.id
            },
            environment: environment,

            dbOptions: {
                db_name: "budget",
                version: '1',
                description: 'Budget local database',
                dbSize: 30 * 1024 * 1024, //30Mb
                provider: (environment == "mobile") ? 'sqlite' : ''
            }
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
            'service:db:updateTagIdInTransactions': 'service:db:updateTagIdInTransactions',

            'service:auth:logout': 'service:auth:logout'
        },

        storage: {
            "lastUpdate": 'lastUpdate',
            "isInitDatabase" : "isInitDatabase",
            user: {
                'email': 'email'
            }
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
            signup: prefix + '/api/user/signup',
            signin: prefix + '/api/user/signin',
            logout: prefix + "/api/user/logout",

            //tag
            tagCreate: prefix +'/api/tag/create',
            tagRemove: prefix +'/api/tag/remove',
            tagGet: prefix +'/api/tag/get',
            tagEdit: prefix +'/api/tag/edit',

            //transaction
            transactionCreate: prefix +'/api/transaction/create',
            transactionRemove: prefix +'/api/transaction/remove',
            transactionEdit: prefix +'/api/transaction/edit',
            transactionGetById: prefix +'/api/transaction/getById',

            statistic: {
                total: prefix + '/api/transaction/total',
                totalByTag: prefix + '/api/transaction/totalByTag',
                listTransactions: prefix + "/api/transaction/list"
            },

            sync: {
                clientServer: prefix + '/api/sync/clientserver',
                serverClient: prefix + '/api/sync/serverclient'
            }
        },

        showLog: true
    }

})