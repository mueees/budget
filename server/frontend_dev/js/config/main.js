define([], function(){

    var serverConfig = Budget || {};

    return {
        data: {
            user: {
                email: serverConfig.user.email
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
            'main:disable': 'main:disable'
        },

        channels: {},

        api: {
            signup: '/api/user/signup',
            signin: '/api/user/signin'
        },

        showLog: false
    }
})