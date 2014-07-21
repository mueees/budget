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

    tags: [Schema.Types.ObjectId],

    updated_at: {
        type: Date,
        default: new Date()
    }
});

Transaction.statics.removeTagById = function(tagId, userId, cb){

    this.update(
        {
            userId: userId,
            tags: {
                $in: [tagId]
            }
        },

        { $pull: { tags: tagId } },

        {multi: true},

        function ( err ){
            if(err){
                return cb(err);
            }
            console.log("removeTagById");
            cb(null);
        }
    )


    /*this.find({
        userId: userId,
        tags: {
        $in: [tagId]
        }
    }, function ( err, transactions ){
        if(err){
        return cb(err);
        }
    console.log("removeTagById");

        cb(null);
    });*/
}

Transaction.static.getTransactions = function(options, cb){
    this.find(options, function(err, transactions){
        if(err) {
            return cb(err);
        }

        cb(null, transactions);
    })
}

Transaction.statics.deleteById = function(id, cb){
    this.findById( id, function ( err, transaction ){
        transaction.remove( function ( err, transaction ){
            if( err ) {
                return cb(err);
            }else{
                return cb(null, transaction);
            }
        });
    });
}

var TransactionModel = mongoose.model('Transaction', Transaction);
module.exports = TransactionModel;