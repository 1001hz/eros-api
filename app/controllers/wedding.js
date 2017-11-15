var weddingService = require('../services/wedding');
var validator = require('../services/validator');

module.exports = {

    getAll: function(req, res, next) {
        weddingService
            .getAllWeddingsForUser(req._user._id)
            .then(function(wedding){
                res.json(wedding);
            })
            .catch(function(error){
                next(error);
            });
    },

    /**
     * Creates a new wedding
     * @param req
     * @param res
     * @param next
     */
    create: function(req, res, next) {

        validator
            .exists(req, ['name', 'date'])
            .then(function(){

                weddingService
                    .create(req.body.name, req.body.date, req._user._id)
                    .then(function(wedding){
                        res.json(wedding);
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
     * Updates a wedding with only data that is sent
     * @param req
     * @param res
     * @param next
     */
    update: function(req, res, next){

        validator
            .exists(req, ['_id'])
            .then(function(){

                weddingService
                    .update(req.body, req._user._id)
                    .then(function(wedding){
                        res.json(wedding);
                    })
                    .catch(function(error){
                        next(error);
                    });

            })
            .catch(function(error){
                next(error);
            });


    }
};