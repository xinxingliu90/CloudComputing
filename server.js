(function () {
    "use strict";
    var express      = require('express'),
        path         = require('path'),
        favicon      = require('serve-favicon'),
        logger       = require('morgan'),
        cookieParser = require('cookie-parser'),
        bodyParser   = require('body-parser');

    require('dotenv').load();
    var app          = express();

    /**********************************************************
     *                     Configuration                      * 
     **********************************************************/
    app.set('views', path.join(__dirname, 'app/views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(favicon(__dirname + '/app/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'app')));


    /**********************************************************
     *                         Routes                         * 
     **********************************************************/
    var routes = require('./routes/index');
    app.use('/', routes);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });


    module.exports = app;
}());
    