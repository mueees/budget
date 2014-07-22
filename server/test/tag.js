var async = require("async");
var assert = require("assert");
var TagModel = require('../models/tag');
var TransactionModel = require('../models/transaction');
var TagController = require('../controllers/tag');
var TransactionController = require('../controllers/transaction');

describe('Tag', function(){

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
    })

    afterEach(function(done){
        TagModel.find({}).remove(function(){
            TransactionModel.find({}).remove(function(){
                done();
            })
        });
    })

    describe('# create tag', function(){

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


        beforeEach(function(done){
            TagController.create(reqMock, resMock, function(){
                done();
            });
        })

        it('should create tag', function(done){
            TagModel.find({
                tagName: tagName,
                userId: userId
            }, function(err, tags){
                if(err) {
                    return;
                }
                if(tags[0] && tags[0].tagName == tagName){
                    done();
                }else{
                    throw "Error create tag";
                }
            })
        })

    });

    describe('# remove tag', function(){
        var tagName = "test tag name";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMockCreate = {
            body: {
                tagName: tagName
            },
            user: {
                _id: userId
            }
        }
        var reqMockRemove = {
            body: {},
            user: {
                _id: userId
            }
        }
        var tagId;

        beforeEach(function(done){
            //создать тег
            TagController.create(reqMockCreate, resMock, function(tag){
                //создать
                tagId = tag._id + '';

                var transactionRec = {
                    body: {
                        count: 50,
                        tags: [tag._id + '', "53c7f168fb7458ad0a2c1c97"]
                    },
                    user: {
                        _id: userId
                    }
                }

                async.parallel([
                    function(cb){
                        TransactionController.create(transactionRec, resMock, function(transaction){cb()});
                    },
                    function(cb){
                        TransactionController.create(transactionRec, resMock, function(transaction){cb()});
                    }
                ], function(){
                    reqMockRemove.body._id =  tagId;
                    TagController.remove(reqMockRemove, resMock, function(){
                        done();
                    });
                })
            });
        })

        it('should remove tag', function(done){

            async.waterfall([
                function(cb){
                    TagModel.findById(tagId, function(err, tag){
                        if(err) {
                            cb("Error remove tag mongo");
                            return;
                        }

                        if(tag.isDeleted == true){
                            cb(null);
                        }else{
                            cb("Error remove tag");
                        }
                    })
                },
                function(cb){


                    TransactionModel.find({
                        tags: {
                            $in: [tagId]
                        }
                    }, function(err, transaction){
                        if(err) {
                            cb("Error remove tag transaction mongo");
                            return;
                        }

                        if( !transaction.length ){
                            cb(null)
                        }else{
                            cb("Error remove tag transaction");
                        }
                    })
                }
            ], function(err){
                if( err ){
                    throw err;
                }else{
                    done();
                }
            })
        })
    });

    describe('# edit tag', function(){
        var tagName = "test tag name";
        var tagNameNew = "RENAMED";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMockCreate = {
            body: {
                tagName: tagName
            },
            user: {
                _id: userId
            }
        }
        var tagId;

        beforeEach(function(done){
            //создать тег
            TagController.create(reqMockCreate, resMock, function(tag){
                tagId = tag._id + '';

                var recMockEdit = {
                    body: {
                        _id: tagId,
                        tagName: tagNameNew
                    },
                    user: {
                        _id: userId
                    }
                }

                //edit tag
                TagController.edit(recMockEdit, resMock, function(){
                    done();
                });

            });
        })

        it('should edit tag', function(done){
            TagModel.findById(tagId, function(err, tag){
                if(err) {
                    throw "Error edit tag mongo";
                    return;
                }

                if(!tag){
                    throw "Error edit tag: nothing";
                }else{
                    if( tag.tagName != tagNameNew ){
                        throw "Error remove tag";
                    }else{
                        done();
                    }
                }

            });
        })
    });

    describe('# get tag', function(){
        var tagName = "test tag name";
        var userId = "53c7f168fb7458ad0a2c1c97";
        var reqMockCreate = {
            body: {
                tagName: tagName
            },
            user: {
                _id: userId
            }
        }

        var reqMockRemove = {
            body: {},
            user: {
                _id: userId
            }
        }

        beforeEach(function(done){
            async.waterfall([
                function(cb){
                    TagController.create(reqMockCreate, resMock, function(tag){
                        reqMockRemove.body._id = tag._id;
                        cb()
                    });
                },
                function(cb){
                    TagController.create(reqMockCreate, resMock, function(tag){cb()});
                },
                function(cb){
                    TagController.remove(reqMockRemove, resMock, function(tag){cb()});
                }
            ], function(){
                done();
            })
        })

        it('should get tag', function(done){
            var reqMockGet = {
                user: {
                    _id: userId
                }
            }

            TagController.get(reqMockGet, resMock, function(tags){
                if(tags.length == 1 && tags[0].tagName == tagName ){
                    done();
                }else{
                    throw "should get tag";
                }
            })

        })
    });

})
