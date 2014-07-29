var BaseModel = require('../base/action'),
    EmailAction = require('../email/email'),
    util = require('util'),
    _ = require('underscore'),
    config = require('config'),
    logger = require("libs/log")(module),
    async = require('async'),
    UserModel = require('../../models/user');

require('mongooseDb');

function UserStatistic(){}
util.inherits(UserStatistic, BaseModel);

_.extend(UserStatistic.prototype, {
    execute: function(){

        UserModel.find({}, null, function(err, users){
            if(err){
                logger.error(err);
                return false;
            }

            var emailAction = new EmailAction({
                to: config.get('notification:email'),
                template: 'views/cron/users.jade',
                subject: "Users statistics",
                data: {
                    users: users
                }
            });

            emailAction.execute();
        })
    }
});

exports.UserStatistic = UserStatistic;