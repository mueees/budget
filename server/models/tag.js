var _ = require('underscore'),
    logger = require("libs/log")(module),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Tag = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },

    tagName: {
        type: String,
        required: true
    }

});

var TagModel = mongoose.model('Tag', Tag);
module.exports = TagModel;