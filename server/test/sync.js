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
    })

    afterEach(function(done){
        TagModel.find({}).remove(function(){
            TransactionModel.find({}).remove(function(){
                done();
            })
        });
    })

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

})
