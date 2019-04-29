const mongoose = require("mongoose");

const favoritesSchema = mongoose.Schema({
    name: String,
    tvmazeId: Number,
    poster: String,
    avgRating: Number,
    /*user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }*/
    //user:
});

module.exports = mongoose.model('Favorites', favoritesSchema);
