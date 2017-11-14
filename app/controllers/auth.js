var userService = require('../services/user');
var validator = require('../services/validator');

module.exports = {

    login: function(req, res, next){

        validator
            .exists(req, ['username', 'password'])
            .then(function(){
                userService
                    .login(req.body.username, req.body.password)
                    .then(function(user){
                        res.json(user);
                    })
                    .catch(function(error) {
                        return next(error);
                    })
            })
            .catch(function(error) {
                return next(error);
            });

    },

    logout: function(req, res, next){
        userService
            .logout(req._user._id)
            .then(function(){
                res.json({});
            })
            .catch(function(error) {
                return next(error);
            })
    },

    tokenLogin: function(req, res, next){

        validator
            .exists(req, ['token'])
            .then(function(){

                userService
                    .tokenLogin(req.body.token)
                    .then(function(user){
                        res.json(user);
                    })
                    .catch(function(error) {
                        return next(error);
                    });

            })
            .catch(function(error) {
                return next(error);
            });

    },

    forgotPassword: function(req, res, next) {

        validator
            .exists(req, ['email'])
            .then(function(){

                userService
                    .forgotPassword(req.body.email)
                    .then(function(message){
                        res.json(message);
                    })
                    .catch(function(error) {
                        return next(error);
                    });

            })
            .catch(function(error) {
                return next(error);
            });

    },

    resetPassword: function(req, res, next) {

        validator
            .exists(req, ['token', 'email', 'password'])
            .then(function(){

                userService
                    .resetPassword(req.body.token, req.body.email, req.body.password)
                    .then(function(message){
                        res.json(message);
                    })
                    .catch(function(error) {
                        return next(error);
                    });

            })
            .catch(function(error) {
                return next(error);
            });

    }

};