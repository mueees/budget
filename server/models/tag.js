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