const { Schema, model } = require('mongoose');

const itinerarySchema = new Schema({
    profile: String,
    title: String,
    rating: String,
    duration: String,
    price: String,
    hashtags: Array,
});

module.exports = model('Itinerary', itinerarySchema); 