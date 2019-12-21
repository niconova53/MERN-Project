const express = require('express');
const router = express.Router();

// Itinerary MODELO
const itineraryModel = require('../../models/Itinerary');

////// VER ITINERARIO ///////
router.get('/', (req, res) => {

    itineraryModel.find({})
        .then(function (dbItinerarys) {
            res.json(dbItinerarys);
        })
        .catch(function (err) {
            res.json(err);
        })
});

module.exports = router;