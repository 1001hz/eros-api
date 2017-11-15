var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeddingSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    ownerId: { type: String, required: true },
    spouseId: { type: String }
});

WeddingSchema.methods.updateFields = function (wedding) {
    return {
        name: wedding.name ? wedding.name : this.name,
        date: wedding.date ? wedding.date : this.date
    };
};


module.exports = mongoose.model('Wedding', WeddingSchema);