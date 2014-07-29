var BaseModel = require('../base/action'),
    util = require('util'),
    config = require("config"),
    _ = require('underscore');

function BackupDb(){}
util.inherits(BackupDb, BaseModel);

_.extend(BackupDb.prototype, {
    execute: function(){
        var makeDir = require('child_process').exec;
        var makeBackupDb = require('child_process').exec;
        var currentData = new Date();
        var timestamp = currentData.getTime();

        makeDir("mkdir " + config.get('backup:path') + config.get('host') + "/" + timestamp);
        makeBackupDb("mongodump --db " + config.get("db:nameDatabase") + " --out " + config.get('backup:path') + config.get('host') + "/" + timestamp);
    }
});

exports.BackupDb = BackupDb;