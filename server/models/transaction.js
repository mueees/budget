var _ = require('underscore'),
    logger = require("libs/log")(module),
    mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Transaction = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },

    count: {
        type: Number,
        required: true
    },

    tags: [Schema.Types.ObjectId]
});

Transaction.statics.removeTag = function(id, cb){
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

var TransactionModel = mongoose.model('Transaction', Transaction);
module.exports = TransactionModel;