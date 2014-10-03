require("mongooseDb");
var TransactionModel = require('models/transaction');
var TagModel = require('models/tag');

TransactionModel.find({}).remove(function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('TransactionModel was cleaned');
});

TagModel.find({}).remove(function(err){
    if(err){
        console.log(err);
        return false;
    }
    console.log('TagModel was cleaned');
});