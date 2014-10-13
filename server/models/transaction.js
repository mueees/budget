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

    comment: {
        type: String,
        default: ''
    },

    tag: Schema.Types.ObjectId,

    updated_at: {
        type: Date,
        default: new Date()
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

Transaction.pre('save', function(next){
    var now = new Date();
    this.updated_at = now;
    if ( !this.date ) {
        this.date = now;
    }
    next();
});

Transaction.statics.removeTagById = function(tagId, userId, cb){

    this.update(
        {
            userId: userId,
            tag: tagId
        },

        {
            $pull: {
                tag: ''
            },
            updated_at: Date.now()
        },

        {multi: true},

        function ( err ){
            if(err){
                return cb(err);
            }
            cb(null);
        }
    )
};

Transaction.statics.getLatestTransactions = function(lastUpdate, cb){
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

Transaction.statics.getTransactions = function(options, cb){
    options.isDeleted = false;
    this.find(options, function(err, transactions){
        if(err) {
            return cb(err);
        }

        cb(null, transactions);
    })
};

Transaction.statics.getTotals = function(period, userId, cb){

    var start = new Date(period.start);
    start.setHours(0, 0, 0, 0);
    var end = new Date(period.end);
    end.setHours(23,59, 59);

    var query = {
        userId: userId,
        isDeleted: false,
        date: {
            $gte: start,
            $lte: end
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
};

Transaction.statics.getTransactionById = function(_id, userId, cb){
    var query = {
        userId: userId,
        isDeleted: false,
        _id: _id
    };

    this.find(query, function(err, transactions){
        if(err) {
            return cb(err);
        }

        cb(null, transactions[0]);
    })
};

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
                _id: '$tag',
                count: {
                    $sum: '$count'
                }
            }
        },
        {
            $sort: {
                count: -1
            }
        }
    ];

    if(period && period.start && period.end){

        var start = new Date(period.start);
        start.setHours(0, 0, 0, 0);
        var end = new Date(period.end);
        end.setHours(23,59, 59);

        query[0]['$match'].date = {
            $gte: start,
            $lte: end
        };
    }

    this.aggregate(query, function(err, data){
        if(err) {
            return cb(err);
        }

        cb(null, data);
    })
};

Transaction.statics.getTransactionList = function(period, userId, cb){

    var query = {
        userId: mongoose.Types.ObjectId(userId),
        isDeleted: false
    };

    if(period && period.start && period.end){
        query.date = {
            $gte: new Date(period.start).setHours(0, 0, 0, 0),
            $lte: new Date(period.end).setHours(23,59, 59)
        }
    }

    var fields = {
        _id: 1,
        comment: 1,
        count: 1,
        tag: 1,
        date: 1
    }

    this.find(query, fields).lean().exec(function(err, transactions){
        if(err) {
            return cb(err);
        }
        cb(null, transactions);
    });
};

Transaction.statics.deleteById = function(id, cb){
    this.findById( id, function ( err, transaction ){

        if( !transaction ){
            logger.error('transaction not found');
            return cb();
        }

        transaction.isDeleted = true;
        transaction.updated_at = Date.now();

        transaction.save( function ( err, transaction ){
            if( err ) {
                return cb(err);
            }else{
                return cb(null, transaction);
            }
        });
    });
};

var TransactionModel = mongoose.model('Transaction', Transaction);
module.exports = TransactionModel;