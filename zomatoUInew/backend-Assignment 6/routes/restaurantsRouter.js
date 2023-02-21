const express = require('express');

// importing all the controllers to handle requests 
var {filterSearch,
	// getRestaurantByCity,
	getrestaurantbylocation,
	// getItemsByRestaurant,
	// getRestaurantById,
	getRestaurants,
	addRestaurantList} = require('../controller/restaurantsController');

// initializing and resigtering express routers 
const router = express.Router();

// registering all the routes - API endpoints 
// Api used in Project Components
// router.get('/getRestaurantsbycity/:city', function(req,res,next){
//     getRestaurantByCity(req,res,next);
// });

// router.get('/getResById/:resId', function(req,res,next){
//     getRestaurantById(req,res,next);
// });

// router.get('/getItemsbyrestaurant/:resId', function(req,res,next){
//     getItemsByRestaurant(req,res,next);
// });

router.get('/addRestaurantList', function(req,res,next){
    addRestaurantList(req,res,next);
});

router.post('/restaurantfilter', function(req,res,next){
    filterSearch(req,res,next);
});

router.get('/getrestaurantbylocation', function(req,res,next){
    getrestaurantbylocation(req,res,next);
});

router.get('/getRestaurants', function(req,res,next){
    getRestaurants(req,res,next);
});






// exporting the router
module.exports = router;
