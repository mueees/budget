var crypto = require('crypto');

var sha1 = crypto.createHash('sha1');
    sha1.update('muebudget' + 'mue.miv@gmail.com' + 'muebudget');
    var password = sha1.digest('hex');

    console.log(password);


    


db.users.update({
    email: 'mue.miv@gmail.com'
}, {
    password: '571c8c4511df957fab8c02d7c923adfdb5361d68'
})


db.users.remove

db.users.insert({
    _id: ObjectId('53d7f4790b777abc6822cb26'),
    email: 'mue.miv@gmail.com',
    password: '571c8c4511df957fab8c02d7c923adfdb5361d68',
    status: 200,
    confirmationId: null
})