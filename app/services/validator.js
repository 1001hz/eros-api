module.exports = {

    /**
     * Checks is parameters in params array exist in the requests body.
     * @param req
     * @param params
     * @returns {Function|*|U}
     */
    exists: function(req, params) {

        return new Promise(function(resolve, reject) {
            for(var i=0; i<params.length; i++){
                if(req.body[params[i]] === undefined || req.body[params[i]] === ''){
                    var error = { status: 422, message: params[i] + ' parameter is required' };
                    reject(error);
                }
            }
            resolve();
        });


    }
}