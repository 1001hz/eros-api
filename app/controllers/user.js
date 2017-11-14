var userService = require('../services/user');
var validator = require('../services/validator');

module.exports = {

    /**
     * Gets the currently logged in user
     * @param req
     * @param res
     */
    find: function(req, res){
        res.json(req._user);
    },

    /**
     * Creates a new user if the email is free
     * @param req
     * @param next
     */
    create: function(req, next) {

        validator
            .exists(req, ['email', 'password'])
            .then(function(){

                userService
                    .create(req.body.email, req.body.password)
                    .then(function(user){
                        res.json(user);
                    })

            })
            .catch(function(error){
                next(error);
            });

    },

    /**
     * Updates a user with only data that is sent
     * @param req
     * @param res
     * @param next
     */
    update: function(req, res, next){

        validator
            .exists(req, ['user'])
            .then(function(){

                userService
                    .update(req.body.user)
                    .then(function(user){
                        res.json(user);
                    })
                    .catch(function(error){
                        next(error);
                    });

            })
            .catch(function(error){
                next(error);
            });


    },

    /**
     * Updates a user's password
     * @param req
     * @param res
     * @param next
     */
    updatePassword: function(req, res, next){
        validator
            .exists(req, ['current', 'new'])
            .then(function(){

                userService
                    .updatePassword(req._user, req.body.current, req.body.new)
                    .then(function(){
                        res.status(200).send({});
                    })

            })
            .catch(function(error){
                next(error);
            });
    },

    /**
     * Updates a user's image
     * @param req
     * @param res
     * @param next
     */
    updateAvatar: function(req, res, next){
        userService
            .updateAvatar(req, res)
            .then(function(user){
                res.json(user);
            })
            .catch(function(error) {
                return next(error);
            });
    }
};