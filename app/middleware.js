var bodyParser = require('body-parser');
var express = require('express');
var config = require('../config');
var security = require('./security');
var userService = require('./services/user.js');
var path = require('path');

module.exports = function(app, apiRouter, openRouter){

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/api/'+config.version, apiRouter);
    //app.use('/callback', openRouter);

    //apiRouter.use('/api/v1', function(req, res, next) {
    //    next();
    //});

    apiRouter.use(function(req, res, next) {
        //console.log(req.originalUrl);

        res.header("Access-Control-Allow-Origin", config.access.host + ':' + config.access.port);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");

        if ('OPTIONS' == req.method) {
            res.status(201).send();
        }
        else {
            next();
        }
    });

    // protect routes with token and pass user derived from token to next
    apiRouter.use(function(req, res, next) {

        var isSecureRoute = false;
        var securePaths = security.secure;
        for(var i=0; i<securePaths.length;i++) {
            if('/api/'+config.version + securePaths[i].path === req.originalUrl){
                isSecureRoute = true;
                if(securePaths[i].allow){
                    for(var j=0; j<securePaths[i].allow.length; j++) {
                        if(req.method === securePaths[i].allow[j]) {
                            isSecureRoute = false;
                        }
                    }
                }
                break;
            }
        }

        if(isSecureRoute) {
            var token = req.get('X-Auth-Token');
            if (token) {
                userService
                    .getUserByToken(token)
                    .then(function (user) {
                        console.log(user);
                        if (user) {
                            req._user = user;
                            next();
                        }
                        else {
                            res.status(422).send();
                        }
                    })
                    .catch(function () {
                        res.status(401).send();
                    });
            }
            else {
                res.status(401).send();
            }
        }
        else {
            next();
        }

    });

    app.use(function(err, req, res, next) {
        console.log("ERR",err);
        res.status(err.status || 500).send(err);
    });

    return app;

}