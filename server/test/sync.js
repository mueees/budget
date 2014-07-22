var async = require("async");
var assert = require("assert");
var TagModel = require('../models/tag');
var TransactionModel = require('../models/transaction');
var TagController = require('../controllers/tag');
var TransactionController = require('../controllers/transaction');
var SyncController = require('../controllers/sync');

describe('Sync', function(){

    var resMock = {
        send: function(message){
            //console.log('send');
        }
    }

    beforeEach(function(done){
        TagModel.find({}).remove(function(){
            TransactionModel.find({}).remove(function(){
                done();
            })
        });
    });

    afterEach(function(done){
        TagModel.find({}).remove(function(){
            TransactionModel.find({}).remove(function(){
                done();
            })
        });
    });

    describe('#edit tag', function(){

        var tagName = "test tag name";
        var newTagName = "RENAMED";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                tagName: tagName
            },
            user: {
                _id: userId
            }
        }

        var tagId;

        beforeEach(function(done){
            //создаем тег
            TagController.create(reqMock, resMock, function(tag){
                tagId = tag._id;
                var reqMockSync = {
                    body: {
                        tags: [{
                            edit: true,
                            _id: tagId,
                            tagName: newTagName

                        }]
                    },
                    user: {
                        _id: userId
                    }
                }

                //редактируем тег
                SyncController.clientServer(reqMockSync, resMock, function(){
                    done();
                });
            });
        })

        it('should edit tag', function(done){
            TagModel.findById(tagId, function(err, tag){
                if(err) {
                    return;
                }

                if(tag.tagName == newTagName){
                    done();
                }else{
                    throw "Error edit tag";
                }
            })
        })

    });

    describe('#edit tag, that was removed before', function(){

        var tagName = "test tag name";
        var newTagName = "RENAMED";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                tagName: tagName
            },
            user: {
                _id: userId
            }
        }

        var tagId;

        beforeEach(function(done){
            //создаем тег
            TagController.create(reqMock, resMock, function(tag){
                tagId = tag._id;

                var reqMockRemove = {
                    body: {
                        _id: tagId
                    },
                    user: {
                        _id: userId
                    }
                }

                //удаляем тег
                TagController.remove(reqMockRemove, resMock, function(){

                    var reqMockSync = {
                        body: {
                            tags: [{
                                edit: true,
                                _id: tagId,
                                tagName: newTagName

                            }]
                        },
                        user: {
                            _id: userId
                        }
                    }

                    //редактируем тег
                    SyncController.clientServer(reqMockSync, resMock, function(){
                        done();
                    });

                });

            });
        })

        it('should edit tag', function(done){
            TagModel.findById(tagId, function(err, tag){
                if(err) {
                    return;
                }

                if(tag.tagName == tagName && tag.isDeleted){
                    done();
                }else{
                    throw "Error edit tag";
                }
            })
        })

    });

    describe('#remove tag', function(){
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

        var tagId;

        beforeEach(function(done){
            //создаем тег
            TagController.create(reqMock, resMock, function(tag){
                tagId = tag._id;
                var reqMockSync = {
                    body: {
                        tags: [{
                            remove: true,
                            _id: tagId
                        }]
                    },
                    user: {
                        _id: userId
                    }
                }

                //редактируем тег
                SyncController.clientServer(reqMockSync, resMock, function(){
                    done();
                });
            });
        })

        it('should mark tag as deleted', function(done){
            TagModel.findById(tagId, function(err, tag){
                if(err) {
                    return;
                }

                if(tag.isDeleted){
                    done();
                }else{
                    throw "Should mark tag as deleted";
                }
            })
        })

    });

    describe('#create tag', function(){
        var tagName = "test tag name";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMockSync =  {
            body: {
                tags: [{
                    create: true,
                    _id: "before saved",
                    tagName: tagName
                }]
            },
            user: {
                _id: userId
            }
        }

        beforeEach(function(done){
            //создаем тег
            SyncController.clientServer(reqMockSync, resMock, function(){
                done();
            });
        })

        it('should mark tag as deleted', function(done){
            TagModel.find({}, function(err, tags){
                if(err) {
                    return;
                }

                if(tags.length){
                    done();
                }else{
                    throw "Tag not created";
                }
            })
        })

    });


    describe('#edit transaction', function(){

        var count = 50;
        var newCount = 60;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                count: count,
                tags: []
            },
            user: {
                _id: userId
            }
        }

        var transactionId;

        beforeEach(function(done){
            //создаем тег
            TransactionController.create(reqMock, resMock, function(transaction){
                transactionId = transaction._id;

                var reqMockSync = {
                    body: {
                        transactions: [{
                            edit: true,
                            _id: transactionId,
                            count: newCount
                        }]
                    },
                    user: {
                        _id: userId
                    }
                }

                //редактируем тег
                SyncController.clientServer(reqMockSync, resMock, function(){
                    done();
                });
            });
        })

        it('should edit transaction', function(done){
            TransactionModel.findById(transactionId, function(err, transaction){
                if(err) {
                    return;
                }

                if(transaction.count == newCount){
                    done();
                }else{
                    throw "Error edit transaction";
                }
            })
        })

    });

    describe('#delete transaction', function(){

        var count = 50;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMock = {
            body: {
                count: count,
                tags: []
            },
            user: {
                _id: userId
            }
        }

        var transactionId;

        beforeEach(function(done){
            //создаем тег
            TransactionController.create(reqMock, resMock, function(transaction){
                transactionId = transaction._id;

                var reqMockSync = {
                    body: {
                        transactions: [{
                            remove: true,
                            _id: transactionId
                        }]
                    },
                    user: {
                        _id: userId
                    }
                }

                //редактируем тег
                SyncController.clientServer(reqMockSync, resMock, function(){
                    done();
                });
            });
        })

        it('should edit transaction', function(done){
            TransactionModel.findById(transactionId, function(err, transaction){
                if(err) {
                    return;
                }

                if(transaction.isDeleted){
                    done();
                }else{
                    throw "Error edit transaction";
                }
            })
        })

    });

    describe('#create transaction', function(){
        var count = 50;
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMockSync =  {
            body: {
                transactions: [{
                    create: true,
                    _id: "before saved",
                    count: count
                }]
            },
            user: {
                _id: userId
            }
        }

        beforeEach(function(done){
            //создаем тег
            SyncController.clientServer(reqMockSync, resMock, function(){
                done();
            });
        })

        it('should create transaction', function(done){
            TransactionModel.find({}, function(err, transactions){
                if(err) {
                    return;
                }

                if(transactions.length){
                    done();
                }else{
                    throw "Tag transaction created";
                }
            })
        })

    });


    describe('#custom transaction test', function(){
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
        var reqMockSync =  {
            body: {
                transactions: [
                    {
                        create: true,
                        _id: "before saved",
                        count: count
                    }
                ]
            },
            user: {
                _id: userId
            }
        }

        beforeEach(function(done){
            //создаем тег

            async.parallel([
                function(cb){
                    TransactionController.create(reqMock, resMock, function(transaction){
                        cb();
                    });
                },
                function(cb){
                    TransactionController.create(reqMock, resMock, function(transaction){
                        cb();
                    });
                }
            ], function(){

                SyncController.clientServer(reqMockSync, resMock, function(){
                    done();
                });
            })
        })

        it('Transaction custom test', function(done){
            TransactionModel.find({}, function(err, transactions){
                if(err) {
                    return;
                }

                if(transactions.length === 3){
                    done();
                }else{
                    throw "Transaction custom test";
                }
            })
        })

    });

})
