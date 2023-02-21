const Restaurant = require("../models/restaurantsModel"); // importing the Restaurant Model

// filter function to filter the data based on multiple params
filterSearch = (req, res, next) => {
	let { mealtype, cuisine, location, lcost, hcost, page, sort } = req.query;

	page = page ? page : 1;
	sort = sort ? sort : 1;

	let payload = {};
	const itemsPerPage = 2;

	let startIndex = itemsPerPage * page - itemsPerPage; //4*3-4=> 12-4=> 8 start index of the items that will be shown
	let endIndex = itemsPerPage * page; //4*3=> 12 end index of the items that will be shown

	if (mealtype) {
		payload['type.mealtype'] = mealtype;
	}

	if (mealtype && cuisine) {
		payload["type.mealtype"] = mealtype;
		payload["Cusine.cuisine"] = { $in: cuisine };
	}

	if (mealtype && lcost && hcost) {
		//slipt function to extract lcost and hcost delimitor i.e. 500'-'1000
		payload["type.mealtype"] = mealtype;
		payload["cost"] = { $lte: hcost, $gte: lcost };
	}

	if (mealtype && cuisine && lcost && hcost) {
		payload["type.mealtype"] = mealtype;
		payload["Cusine.cuisine"] = { $in: cuisine };
		payload["cost"] = { $lte: hcost, $gte: lcost };
	}

	if (mealtype && location) {
		payload["type.mealtype"] = mealtype;
		payload["city"] = location;
	}

	if (mealtype && location && cuisine) {
		payload["type.mealtype"] = mealtype;
		payload["city"] = location;
		payload["cost"] = { $lte: hcost, $gte: lcost };
	}

	if (mealtype && location && lcost && hcost && cuisine) {
		payload["type.mealtype"] = mealtype;
		payload["city"] = location;
		payload["cost"] = { $lte: hcost, $gte: lcost };
		payload["Cusine.cuisine"] = { $in: cuisine };
	}
	//Find()
	Restaurant.find({ payload })
		.sort({ cost: sort })
		.then((response) => {
			const filterResponse = response.slice(startIndex,endIndex);
			res.status(200).json(filterResponse);
		})
		.catch((err) => {
			res.status(400).json({ error: err });
		});
};


// getRestaurantByCity function to get restaurants by city name
// getRestaurantByCity = (req, res) => {
// 	const cityId = req.params.city;
// 	Restaurant.find({ city: cityId })
// 		.then((result) => {
// 			res.status(200).json({
// 				message: "Restaurant Fetched Sucessfully",
// 				restaurantList: result,
// 			});
// 		})
// 		.catch((err) => console.log(err));
// };

getrestaurantbylocation = (req, res) => {
	const locationId = req.query.locationId;
	Restaurant.find({ city: `${locationId}` })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => console.log(err));
};

// getItemsByRestaurant function to get Items by rest name
// getItemsByRestaurant = (req, res) => {
// 	const resId = req.params.resId;
// 	Item.find({ restaurantId: resId })
// 		.then((result) => {
// 			res.status(200).json({
// 				message: "Restaurant Items Fetched Sucessfully",
// 				itemsList: result,
// 			});
// 		})
// 		.catch((err) => console.log(err));
// };

// getRestaurantById function to get restaurants by Id
// getRestaurantById = (req, res, next) => {
// 	const resId = req.params.resId;
// 	Restaurant.findById(resId)
// 		.then((result) => {
// 			res.status(200).json({
// 				message: "Restaurant Fetched Sucessfully",
// 				restaurant: result,
// 			});
// 		})
// 		.catch((err) => console.log(err));
// };

getRestaurants = (req, res, next) => {
	Restaurant.find()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => console.log(err));
};

// addRestaurantList function to add restaurants to DB
addRestaurantList = (req, res, next) => {
	const name = req.body.name;
	const address = req.body.address;
	const logo = req.body.logo;
	const Rest = new Restaurant({ name: name, address: address, logo: logo });
	Rest.save()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log(err);
		});
};


module.exports ={
	filterSearch,
	// getRestaurantByCity,
	getrestaurantbylocation,
	// getItemsByRestaurant,
	// getRestaurantById,
	getRestaurants,
	addRestaurantList
};