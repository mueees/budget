var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , UserModel = require('models/user');

var controller = {
    home: function(req, res, next) {
        console.log(req.user);
        res.render('index', {
            user: req.user || false
        });
    }
}
module.exports = controller;