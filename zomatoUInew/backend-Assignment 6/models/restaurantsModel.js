const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
	_id: String,
	name: String,
	locality: String,
	city_name: String,
	city: String,
	location_id:String,
	area: String,
	thumb: String,
	cost: Number,
	address: String,
	type: [
		{
			mealtype: String,
			name: String,
		},
	],
	Cuisine: [
		{
			cuisine: String,
			name: String,
		},
		{
			cuisine: String,
			name: String,
		},
	],
});

module.exports = mongoose.model("Restaurants",RestaurantSchema);