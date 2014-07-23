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
            'user:entity': 'user:entity'
        },

        commands: {
            'main:enable': 'main:enable',
            'main:disable': 'main:disable',

            'notify:showNotify': 'notify:showNotify',
            'notify:showNotify:side': 'notify:showNotify:side'
        },

        channels: {},

        api: {
            signup: '/api/user/signup',
            signin: '/api/user/signin'
        },

        showLog: false
    }

})