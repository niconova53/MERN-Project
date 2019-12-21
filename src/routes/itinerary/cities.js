const express = require('express');
const router = express.Router();

// City MODELO
const cityModel = require('../../models/City');

////// CREAR CIUDAD ///////
router.post('/', (req, res) => {

    cityModel.create(req.body)
        .then(function (dbCities) {
            res.json(dbCities);
        })
        .catch(function (err) {
            res.json(err);
        });
});

////// LISTAR CIUDADES ///////
router.get('/', (req, res) => {

    cityModel.find({})
        .then(function (dbCities) {
            res.json(dbCities);
        })
        .catch(function (err) {
            res.json(err);
        })
});


////// VER CIUDAD ///////
router.get('/city/:id', (req, res) => {

    cityModel.findOne({ _id: req.params.id })
        .populate("itinerary")
        .then(function (dbCities) {
            res.json(dbCities);
        })
        .catch(function (err) {
            res.json(err);
        });
});

module.exports = router;