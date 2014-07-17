var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , UserModel = require('models/user');

var controller = {
    signup: function(req, res, next){
        var data = req.body;

        if( !validator.isEmail(data.email) ) {
            return next(new HttpError(400, "Invalid Email"));
        }

        if( !validator.isLength(data.password, 3) ){
            return next(new HttpError(400, "Password least than 3."));
        }

        async.waterfall([
            function(cb){
                UserModel.isHaveUser(data.email, cb);
            },
            function(isHaveUser, cb){
                if( isHaveUser ){
                    cb("User with same email already registered");
                    return false;
                }else{
                    cb(null);
                    return false;
                }
            },
            function(cb){
                UserModel.registerNewUser(data.email, data.password, cb);
            }
        ], function(err, user){
            if( err ){
                return next(new HttpError(400, err));
            }
            res.send(200, {
                _id: user._id
            })


            var emailAction = new EmailAction({
                to: user.email,
                template: './views/email/registerConfirmation.hbs',
                subject: "Confirmation account",
                data: {
                    confirmationId: user.confirmationId
                }
            });
            emailAction.execute();
        })

    },
    signin: function(req, res, next){
        res.send({});
    },
    logout: function(req, res, next){
        req.logout();
        res.send({});
    },

    confirmation: function(req, res, next){
        if(!req.params.id) {
            return res.redirect('/');
        }

        async.waterfall([
            function(cb){
                UserModel.isHaveConfirmationId(req.params.id, cb);
            },
            function(user, cb){
                if( !user ){
                    return cb("Cannot find confirmation id");
                }
                return cb(null, user);
            }
        ], function(err, user){
            if(err) {
                logger.error(err);
                return next(new HttpError(400, err));
            }

            logger.info("User confirmed account");
            req.login(user._id, function(err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });

            if( user.status == 400 ){
                user.confirm();

                var emailAction = new EmailAction({
                    to: user.email,
                    template: './views/email/successConfirmation.hbs',
                    subject: "Confirmation success",
                    data: {}
                });
                emailAction.execute();
            }

        })

    }
}
module.exports = controller;