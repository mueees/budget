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
            'tag:entity': 'tag:entity',
            'tag:collection:entity': 'tag:collection:entity',
            'notice:get': 'notice:get',
            'notice:get:prompt' : 'notice:get:prompt'
        },

        commands: {
            'main:enable': 'main:enable',
            'main:disable': 'main:disable',

            'notify:showNotify': 'notify:showNotify',
            'notify:showNotify:side': 'notify:showNotify:side',
            'notify:clearAllNotice': 'notify:clearAllNotice'
        },

        channels: {},

        api: {
            signup: '/api/user/signup',
            signin: '/api/user/signin',
            tagCreate: '/api/tag/create',
            tagRemove: '/api/tag/remove',
            tagGet: '/api/tag/get',
            tagEdit: '/api/tag/edit'
        },

        showLog: false
    }

})