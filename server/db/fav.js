const Favorites = require('../models/Favorites')
const ObjectID = require("mongodb").ObjectID

const methods = {
    addMovieToFavorites: async ({
                                    rating, genres, name, summary, id, image
                                }, user) => {
        try {
            const exist = await Favorites.findOne({tvmazeId: id}).exec()

            if(exist) {
                return 201
            }
            const avgRating = rating && rating.average ? rating.average : -100
            const poster = image && image.original ? image.original : ''

            const item = new Favorites({
                avgRating,
                genres,
                name,
                summary,
                tvmazeId: id,
                poster,
                user: user._id
            })

            await item.save()
            return 200
        } catch(err) {
            throw err
            return 500
        }
    },
    getUserFavoriteMovies: async (user) => {
        try {
            const result = await Favorites.find({user: user._id}).exec()
            return result
        } catch(err) {
            throw err
        }
    },
    removeFromFavorites: async ({id}) => {
        try {
            await Favorites.remove({_id: id}).exec()
            return
        } catch(err) {
            throw err
        }
    }
}

module.exports = methods;
