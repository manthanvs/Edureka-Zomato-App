const City = require('../models/cityModel');  // importing the City Model

// getCityList function to return all the location list for Dropdown
getcitylist = (req, res, next) => {
    City.find().then(result => {
        res.status(200).json(result);
    })
}

// addCityList to add location to DB
addCityList = (req, res, next) => {
    const name = req.body.name;
    const city_id = req.body.city_id;
    const location_id = req.body.location_id;
    const country_name = req.body.country_name;
    const Cities = new City({ name: name, city_id: city_id, location_id: location_id, country_name: country_name });
    Cities.save().then(result => {
        res.status(200).json(result)
    }).catch(err => {
        console.log(err)
    })
}

module.exports={
    getcitylist,
    addCityList
}