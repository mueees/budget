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
    },

    updated_at: {
        type: Date,
        default: new Date()
    }
});

Tag.statics.isHasTag = function(id, userId, cb){
    var query = {
        _id: id,
        userId: userId
    }

    this.find(query, null, function(err, tags){
        if( err ){
            logger.error(err);
            cb("Server error");
            return false;
        }

        if( tags.length === 0 ){
            cb(null, false);
        }else{
            cb(null, tags[0]);
        }
    });
}

Tag.statics.deleteById = function(id, cb){
    this.findById( id, function ( err, tag ){
        tag.remove( function ( err, tag ){
            if( err ) {
                return cb(err);
            }else{
                return cb(null, tag);
            }
        });
    });
}

var TagModel = mongoose.model('Tag', Tag);
module.exports = TagModel;