const { Schema, model } = require('mongoose');


const citySchema = new Schema({
    ciudad: String,
    itinerary: [
        {
            type: Schema.Types.ObjectId,
            ref: "Itinerary",
        }
    ]
});

module.exports = model('City', citySchema);

