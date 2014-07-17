var start = new Date();
var express = require('express'),
    app = express(),
    route = require('routes/route'),
    http = require('http'),
    passport = require('passport'),
    HttpError = require('error').HttpError,
    logger = require("libs/log")(module),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    config = require("config");

require("mongooseDb");

// Passport configuration
require('modules/auth');

app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}));
app.use(cookieParser());
app.set('views', __dirname + "/views");
app.set('view engine', 'jade');

app.use( require("middleware/sendHttpError") );

//routing
route(app);

//404
app.use(function(req, res, next){
    logger.log('warn', { status: 404, url: req.url });
    res.render('error', { status: 404, url: req.url });
    res.status(404);
});


app.use(function(err, req, res, next){

    if( typeof err == "number"){
        err = new HttpError(err);
    }

    if( err instanceof HttpError ){
        res.sendHttpError(err);
    }else{
        if( app.get("env") == "development" ){
            express.errorHandler()(err, req, res, next);
        }else{
            express.errorHandler()(err, req, res, next);
            res.send(500);
        }
    }

})

//create server
var server = http.createServer(app);
server.listen(config.get("port"));
logger.info("Web server listening: " + config.get("port"));

console.log( new Date() - start )