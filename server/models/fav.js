const mongoose = require("mongoose");

const favoritesSchema = mongoose.Schema({
    name: String,
    tvMazeId: Number,
    poster: String,
    avgRating: Number,
    premiered: String
});

module.exports = mongoose.model('Favorites', favoritesSchema);
