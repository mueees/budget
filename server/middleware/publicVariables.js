var config = require("config");

module.exports = function(req, res, next){

    if( process.env.NODE_SITE == "live" ){
        res.locals.live = true;
    }else{
        res.locals.live = false;
    }

    next();
}