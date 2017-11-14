var config = require('../../config');
module.exports = {

    getMessage: function(req, res){
        res.status(200).json({name: 'my app', version: config.version});
    }

}