var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeddingSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    ownerId: { type: String, required: true },
    spouseId: { type: String },
    ceremonyVenue: { type: String },
    ceremonyLocation: { type: String },
    ceremonyInfo: { type: String },
    ceremonyTime: { type: String },
    ceremonyMap: { type: String },
    aftersVenue: { type: String },
    aftersLocation: { type: String },
    aftersInfo: { type: String },
    aftersTime: { type: String },
    aftersMap: { type: String }
});

WeddingSchema.methods.updateFields = function (wedding) {
    return {
        name: wedding.name ? wedding.name : this.name,
        date: wedding.date ? wedding.date : this.date,
        ceremonyVenue: wedding.ceremonyVenue ? wedding.ceremonyVenue : this.ceremonyVenue,
        ceremonyLocation: wedding.ceremonyLocation ? wedding.ceremonyLocation : this.ceremonyLocation,
        ceremonyInfo: wedding.ceremonyInfo ? wedding.ceremonyInfo : this.ceremonyInfo,
        ceremonyTime: wedding.ceremonyTime ? wedding.ceremonyTime : this.ceremonyTime,
        ceremonyMap: wedding.ceremonyMap ? wedding.ceremonyMap : this.ceremonyMap,
        aftersVenue: wedding.aftersVenue ? wedding.aftersVenue : this.aftersVenue,
        aftersLocation: wedding.aftersLocation ? wedding.aftersLocation : this.aftersLocation,
        aftersInfo: wedding.aftersInfo ? wedding.aftersInfo : this.aftersInfo,
        aftersTime: wedding.aftersTime ? wedding.aftersTime : this.aftersTime,
        aftersMap: wedding.aftersMap ? wedding.aftersMap : this.aftersMap
    };
};


module.exports = mongoose.model('Wedding', WeddingSchema);