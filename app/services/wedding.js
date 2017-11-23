var Wedding = require('../models/wedding');

module.exports = {

    getAllWeddingsForUser: function(userId) {
        return Wedding.find({ ownerId: userId }).exec();
    },


    getWeddingById: function(weddingId) {
        return Wedding.findOne({ _id: weddingId }).exec();
    },

    create: function(name, date, ownerId) {

        var newWedding = new Wedding({
            name: name,
            date: date,
            ownerId: ownerId
        });

        return newWedding.save()
            .catch(function(error){
                throw({status: 422, message: "Validation error when saving wedding", error: error});
            });
    },

    update: function(wedding, userId) {

        return Wedding
            .findOne({ _id: wedding._id })
            .exec()
            .then(function(DbWedding){

                if(DbWedding){
                    if(DbWedding.ownerId == userId){

                        var query = { _id: wedding._id };
                        var updateFields = DbWedding.updateFields(wedding);
                        var options = {new: true};

                        return Wedding.findOneAndUpdate(query, updateFields, options).exec();
                    }
                    else {
                        throw({status: 401, message: "Wedding doesn't belong to this user"});
                    }

                }
                else {
                    throw({status: 422, message: "Wedding doesn't exist"});
                }
            });
    },

    remove: function(weddingId, userId) {

        return Wedding
            .findOne({ _id: weddingId })
            .exec()
            .then(function(DbWedding){

                if(DbWedding){
                    if(DbWedding.ownerId == userId){

                        var query = { _id: weddingId };
                        return Wedding.findByIdAndRemove(query).exec();
                    }
                    else {
                        throw({status: 401, message: "Wedding doesn't belong to this user"});
                    }

                }
                else {
                    throw({status: 422, message: "Wedding doesn't exist"});
                }
            });
    }
};