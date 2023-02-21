const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Registering the Items Schema
const ItemSchema = new Schema({
    name: String,
    description: String,
    restaurantId: String,
    ingridients: Array,
    image:  String,
    qty: Number,
})

module.exports = mongoose.model('Item', ItemSchema);  // exporting the model