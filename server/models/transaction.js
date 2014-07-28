var _ = require('underscore'),
    logger = require("libs/log")(module),
    async = require("async"),
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

    date: {
        type: Date,
        default: new Date()
    },

    tags: [Schema.Types.ObjectId],

    updated_at: {
        type: Date,
        default: new Date()
    },

    isDeleted: {
        type: Boolean,
        default: false
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

        {
            $pull: {
                tags: tagId
            },
            updated_at: Date.now()
        },

        {multi: true},

        function ( err ){
            if(err){
                return cb(err);
            }
            console.log("removeTagById");
            cb(null);
        }
    )
}

Transaction.statics.getTransactions = function(options, cb){
    options.isDeleted = false;
    this.find(options, function(err, transactions){
        if(err) {
            return cb(err);
        }

        cb(null, transactions);
    })
}

Transaction.statics.getTotals = function(period, userId, cb){
    var query = {
        userId: userId,
        date: {
            $gt: new Date(period.start),
            $lt: new Date(period.end)
        }
    };

    this.find(query, function(err, transactions){
        if(err) {
            return cb(err);
        }

        var result = 0;

        if( transactions && transactions.length ){
            _.each(transactions, function(transaction){
                result += transaction.count;
            })
        }

        cb(null, result);
    })
}

Transaction.statics.getTotalsByTag = function(period, userId, cb){



    var query = [
        {
            $match: {
                userId: mongoose.Types.ObjectId(userId),
                isDeleted: false
            }
        },
        {
            $group: {
                _id: '$tags',
                count: {
                    $sum: '$count'
                }
            }
        }
    ];

    if(period && period.length){
        query[0].$match.date = {
            $gt: new Date(period.start),
            $lt: new Date(period.end)
        };
    }

    this.aggregate(query, function(err, data){
        if(err) {
            return cb(err);
        }
        cb(null, data);
    })
}

Transaction.statics.deleteById = function(id, cb){
    this.findById( id, function ( err, transaction ){

        transaction.isDeleted = true;
        transaction.updated_at = Date.now();

        if( !transaction ){
            logger.error('transaction not found');
            return cb('transaction not found');
        }

        transaction.save( function ( err, transaction ){
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