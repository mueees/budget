var async = require("async");
var assert = require("assert");
var TagModel = require('../models/tag');
var TransactionModel = require('../models/transaction');
var TagController = require('../controllers/tag');
var TransactionController = require('../controllers/transaction');

console.log("TRANSACTION")

describe('Transaction', function(){

    var resMock = {
        send: function(message){
            //console.log('send');
        }
    };

    beforeEach(function(done){
        TagModel.find({}).remove(function(){
            TransactionModel.find({}).remove(function(){
                done();
            })
        });
    })

    afterEach(function(done){
        TagModel.find({}).remove(function(){
            TransactionModel.find({}).remove(function(){
                done();
            })
        });
    })

    /*

    describe('# create transaction', function(){

        var count = 50;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                count: count
            },
            user: {
                _id: userId
            }
        }
        var transactionId;

        beforeEach(function(done){
            TransactionController.create(reqMock, resMock, function(transaction){
                transactionId = transaction._id;
                done();
            });
        })

        it('should create transaction', function(done){

            TransactionModel.findById(transactionId, function(err, transaction){
                if(err) {
                    throw "Error create transaction mongo";
                    return;
                }
                if(transaction && transaction.count == count){
                    done();
                }else{
                    throw "Error create transaction";
                }
            })
        })

    });

    describe('$ remove transaction', function(){
        var count = 50;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                count: count
            },
            user: {
                _id: userId
            }
        }

        var transactionId;


        beforeEach(function(done){
            TransactionController.create(reqMock, resMock, function(transaction){
                transactionId = transaction._id;

                var transactionRec = {
                    body: {
                        _id: transactionId
                    },
                    user: {
                        _id: userId
                    }
                }

                TransactionController.remove(transactionRec, resMock, function(){
                    done();
                })

            });
        })

        it('should remove transaction', function(done){

            TransactionModel.find({
                idDeleted: false
            }, function(err, transactions){
                if(err) {
                    throw "Error remove transaction mongo";
                    return;
                }
                if(transactions.length === 0){
                    done();
                }else{
                    throw "Error remove transaction";
                }
            })
        })
    });

    describe('# edit transaction', function(){
        var count = 50;
        var newCount = 70;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                count: count
            },
            user: {
                _id: userId
            }
        }

        var transactionId;

        beforeEach(function(done){
            TransactionController.create(reqMock, resMock, function(transaction){
                transactionId = transaction._id;

                var transactionRec = {
                    body: {
                        _id: transactionId,
                        count: newCount
                    },
                    user: {
                        _id: userId
                    }
                }

                TransactionController.edit(transactionRec, resMock, function(){
                    done();
                })

            });
        })

        it('should edit transaction', function(done){
            TransactionModel.findById(transactionId, function(err, transaction){
                if(err) {
                    throw "Error edit transaction mongo";
                    return;
                }

                if(!transaction){
                    throw "Error edit transaction: nothing";
                }else{
                    if( transaction.count != newCount ){
                        throw "Error edit transaction";
                    }else{
                        done();
                    }
                }

            });
        })
    });*/

    describe('# get transactions by tag', function(){

        var tagName = "test tag name";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                tagName: tagName
            },
            user: {
                _id: userId
            }
        }

        var count1 = 50;
        var count2 = 50;
        var count3 = 30;

        var tagId;

        beforeEach(function(done){
            //создать тег
            TagController.create(reqMock, resMock, function(tag){

                tagId = tag._id;

                var reqTransMock1 = {
                    body: {
                        count: count1,
                        tags: [tagId]
                    },
                    user:{_id:userId}
                };
                var reqTransMock2 = {
                    body: {
                        count: count2,
                        tags: [tagId]
                    },
                    user:{_id:userId}
                };
                var reqTransMock3 = {
                    body: {
                        count: count3,
                        tags: []
                    },
                    user:{_id:userId}
                };

                // создать пару трансзакций с тегом и без
                TransactionController.create(reqTransMock1, resMock, function(transaction){

                    TransactionController.create(reqTransMock2, resMock, function(transaction){

                        TransactionController.create(reqTransMock3, resMock, function(transaction){
                            done();
                        });

                    });

                });

            });
        })

        it('should getById transaction correct', function(done){
            var req = {
                body: {
                    period: {
                        start: '2000-01-01',
                        end: '2016-01-01'
                    }
                },
                user: {
                    _id: userId
                }
            }

            TransactionController.totalByTag(req, resMock, function(result){
                if( result && result.length === 2 ){
                    done();
                }else{
                    throw "Error getById transaction mongo";
                }

            });
        })

    })

    /*describe('# create transaction time', function(){
        var count = 50;
        var countTest = 10;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                count: count
            },
            user: {
                _id: userId
            }
        }

        var func = [];
        for( var i = 0; i < countTest; i++ ){
            func.push(function(cb){
                TransactionController.create(reqMock, resMock, function(transaction){
                    cb(null);
                });
            })
        }

        it('time' , function(done){
            var start = new Date();
            async.parallel(func, function(err){
                if(err){
                    throw err;
                }
                var result = new Date() - start;
                console.log(result);
                console.log(result / countTest )
                done();
            })
        })

    })*/

});