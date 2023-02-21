const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the MealType Schema
const MealTypeSchema = new Schema({
    name: String,
    content: String,
    meal_type: Number,
    image:String
})

module.exports = mongoose.model('MealType', MealTypeSchema);  // exporting the model