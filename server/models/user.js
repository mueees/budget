var _ = require('underscore'),
    logger = require("libs/log")(module),
    crypto = require('crypto'),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;
var User = new Schema({

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirmationId: {
        type: String,
        default: "",
        required: true
    },

    //200 - active
    //403 - blocking
    //400 - not confirmed
    status: {
        type: Number,
        default: 400,
        required: true
    }
});
User.statics.isHaveConfirmationId = function(confirmationId, cb){
    this.find({confirmationId: confirmationId}, null, function(err, users){
        if( err ){
            logger.error(err);
            cb("Server error");
            return false;
        }

        if( users.length === 0 ){
            cb(null, false);
        }else{
            cb(null, users[0]);
        }
    });
}

User.statics.getConfirmationId = function(){
    var random = Math.random() * Math.random() * Math.random();
    return Math.floor((new Date()).getTime() * random) + "";
}

User.statics.isHaveUser = function(email, cb){
    this.find({email: email}, null, function(err, users){
        if( err ){
            logger.error(err);
            cb("Server error");
            return false;
        }

        if( users.length === 0 ){
            cb(null, false);
        }else{
            cb(null, users[0]);
        }
    });
}
User.statics.comparePassword = function(password, user){
    var sha1 = crypto.createHash('sha1');
    sha1.update(password + user.email + password);
    var password = sha1.digest('hex');

    return (password == user.password) ? true : false;
}
User.statics.registerNewUser = function(email, password, cb){

    var sha1 = crypto.createHash('sha1');
    sha1.update(password + email + password);
    password = sha1.digest('hex');

    var UserModel = mongoose.model('User');
    var user = new UserModel({
        email: email,
        password: password,
        confirmationId: this.getConfirmationId()
    });

    //save user
    user.save(function(err){
        if(err){
            logger.error(err);
            return cb("Server error");
        }
        cb(null, user);
    });
}

User.methods.confirm = function(cb){
    this.update({
        confirmationId: null,
        status: 200
    }, function(err, user){
        if(err){
            logger.error(err);
            if(cb) cb(err);
        }
        if(cb) cb(null, user);
    })
}

var UserModel = mongoose.model('User', User);
module.exports = UserModel;