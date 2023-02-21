const express = require('express');

// importing all the controllers to handle requests 
var {getcitylist,addCityList} = require('../controller/cityController');

// initializing and resigtering express routers 
const router = express.Router();

// registering all the routes - API endpoints 
router.get('/getcitylist', function(res,req,next){
    getcitylist(res,req,next);
});


router.get('/addCityList', function(res,req,next){
    addCityList(res,req,next);
});


// exporting the router
module.exports = router;
