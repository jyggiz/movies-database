const Favorites = require('../models/fav');

const methods = {
    addShowToFavs: async ({rating, name, tvMazeId, poster, premiered}) => {
        const result = await Favorites.findOne({tvMazeId}).exec();

        if(result) {
            return 201
        }

        const item = new Favorites({
            avgRating: rating,
            name,
            tvMazeId,
            poster,
            premiered
        });

        await item.save();
        return 200
    },
    getFavsShows: async () => {
        return await Favorites.find().exec();
    },
    deleteFavShow: async ({id}) => {
        await Favorites.remove({_id: id}).exec();
        return 200;
    }
};

module.exports = methods;
