//converts tags to tag

var transactions = db.transactions.find();
transactions.forEach(function(transaction){
    var tag = transaction['tags'][0];
    db.transactions.update({
        _id: transaction._id
    }, {
        $unset: {
            tags: ''
        },
        $set: {
            tag: tag
        }
    });
});