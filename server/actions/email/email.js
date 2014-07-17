var BaseModel = require('../base/action'),
    util = require('util'),
    logger = require('libs/log')(module),
    EmailSender = require("modules/EmailSender"),
    config = require("config"),
    async = require('async'),
    jade = require('jade'),

    simpleTextTemp = require('views/email/simpleText.jade'),
    _ = require('underscore');

function EmailAction(options){

    if( !options.data )  {
        throw new Error("Body should be!");
    }

    var defaultOption = {
        to: config.get("email:list").join(','),
        template: simpleTextTemp,
        subject: config.get("email:default:subject"),
        from: config.get("email:default:from"),
        data: null,
        locale: config.get("email:default:locale")
    }

    this.settings = _.extend( defaultOption , options);
}

util.inherits(EmailAction, BaseModel);

_.extend(EmailAction.prototype, {

    makeHtml: function(cb){
        var _this = this;
        _this.settings.html = jade.renderFile(_this.settings.template, _this.settings.data);
        cb(null);
    },

    send: function(cb){
        var _this = this;
        var emailSender = new EmailSender( _this.settings );
        emailSender.send(function(err){
            if(err){ return cb(err);}
            cb(null);
        });
    },

    execute: function(callback){
        async.waterfall([
            this.makeHtml.bind(this),
            this.send.bind(this)
        ], function(err){
            if(err){
                logger.error(err);
                if(callback) callback(err);
                return false;
            }
            if(callback) callback(null);
        })
    }
});

module.exports = EmailAction;