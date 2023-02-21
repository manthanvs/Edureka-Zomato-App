const MealType = require("../models/mealTypeModel"); // importing the MealType model

// getMealType function to get all the mealtypes from DB
getMealType = (req, res, next) => {
	MealType.find().then((result) => {
		res.status(200).json(result);
	});
};

// addMealType to add new mealtypes in DB
addMealType = (req, res, next) => {
	const name = req.body.name;
	const content = req.body.content;
	const meal_type = req.body.meal_type;
	const image = req.body.image;

	const MT = new MealType({
		name: name,
		content: content,
		meal_type: meal_type,
		image: image,
	});
	MT.save()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports={getMealType,addMealType};