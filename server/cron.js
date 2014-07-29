var cronJob = require('cron').CronJob;
var UserStatistic = require('actions/cron/users').UserStatistic;
var BackupDb = require('actions/cron/backup').BackupDb;

/*The time and date fields are:

 field          allowed values
 -----          --------------
 minute         0-59*055
 hour           0-23
 day of month   0-31
 month          0-12 (or names, see below)
 day of week    0-7 (0 or 7 is Sun, or use names)*/



new cronJob('00 14 * * * *', function(){

    var userStatistic = new UserStatistic();
    userStatistic.execute();

    var backupDb = new BackupDb();
    backupDb.execute();

}, null, true, "Europe/Kiev");
