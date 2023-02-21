const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const CitySchema = new Schema({
        name:  String,
        city_id: String,
        location_id: String,
        country_name:String
})

module.exports = mongoose.model('City', CitySchema);   // exporting the model 