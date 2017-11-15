var api = require('./controllers/api');
var user = require('./controllers/user');
var auth = require('./controllers/auth');

module.exports = function(router, openRouter){

    /**
     * Boilerplate
     */
    router
        .route('/')
        .get(api.getMessage);


    /**
     * Auth Section
     */
    router
        .route('/login')
        .post(auth.login);

    router
        .route('/login/token')
        .post(auth.tokenLogin);

    router
        .route('/logout')
        .get(auth.logout);

    router
        .route('/password/forgot')
        .post(auth.forgotPassword);

    router
        .route('/password/reset')
        .post(auth.resetPassword);


    /**
     * User Section
     */

    router
        .route('/user')
        .get(user.find);

    router
        .route('/user')
        .post(user.create);

    router
        .route('/user')
        .patch(user.update);

    router
        .route('/user/password')
        .put(user.updatePassword);

    router
        .route('/user/avatar')
        .post(user.updateAvatar);

    /**
     * Weddings Section
     */

    router
        .route('/weddings')
        .get(function(req, res, next){
            res.status(200).send({ weddings: [
                { _id: '1a2b3c',
                    date: '2017-11-09T16:57:47+00:00',
                    name: 'My wedding'
                },
                { _id: '9z8y7x',
                    date: '2018-12-09T16:37:47+00:00',
                    name: 'Sean Wedding'
                }
            ]})
        })

}