const express = require('express');

// importing all the controllers to handle requests 
var {getMealType,addMealType} = require('../controller/mealTypeController');

// initializing and resigtering express routers 
const router = express.Router();

// registering all the routes - API endpoints 
router.get('/getMeals', function(req,res,next){
    getMealType(req,res,next);
});

router.post('/addMealType', function(req,res,next){
    addMealType(req,res,next);
});

// exporting the router
module.exports = router;
