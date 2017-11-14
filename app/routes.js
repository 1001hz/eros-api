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

    router
        .route('/error')
        .get(api.getError);

    router
        .route('/api')
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
        .route('/user/:id')
        .get(user.findById);

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

}