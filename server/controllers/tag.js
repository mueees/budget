var config = require('config')
    , logger = require('libs/log')(module)
    , HttpError = require('error').HttpError
    , _ = require('underscore')
    , validator = require('validator')
    , async = require('async')
    , EmailAction = require("actions/email/email")
    , TagModel = require('models/tag');

var controller = {

    create: function(req, res, next){
        var data = req.body;

        var tag = new TagModel({
            tagName: data.tagName,
            userId: data.userId
        });

        res.send({
            tag: 123
        });
    },
    get: function(req, res, next){},
    edit: function(req, res, next){},
    remove: function(req, res, next){}
}
module.exports = controller;