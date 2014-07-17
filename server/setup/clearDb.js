require("mongooseDb");
var UserModel = require('models/user');
UserModel.find({}).remove(function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('done');
});