require('../mongooseDb');
var async = require("async");
var assert = require("assert");
var TagModel = require('../models/tag');
var TransactionModel = require('../models/transaction');
var TagController = require('../controllers/tag');
var TransactionController = require('../controllers/transaction');

db.transactions.aggregate([
    {
        $match: {}
    },
    {
        $group: {
            _id: '$tags',
            count: {
                $sum: '$count'
            }
        }
    }
]);