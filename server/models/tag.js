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
    },

    isDeleted: {
        type: Boolean,
        default: false
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

        tag.isDeleted = true;
        tag.updated_at = Date.now();

        if( !tag ){
            logger.error('tag not found');
            return cb('tag not found');
        }

        tag.save( function ( err, tag ){
            if( err ) {
                return cb(err);
            }else{
                return cb(null, tag);
            }
        });
    });
}

Tag.statics.getLatestTags = function(lastUpdate, cb){
    this.find(
        {
            updated_at: {
                $gt: new Date(lastUpdate)
            }
        },
        {
            __v: 0,
            userId: 0
        },
        cb
    );
};

var TagModel = mongoose.model('Tag', Tag);
module.exports = TagModel;