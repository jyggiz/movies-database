export const GET_FAVS = 'GET_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ADD_FAV = 'ADD_FAV';

export const getFavs = (fav_id) => {
    return {
        type: GET_FAVS,
        fav_id
    }
};

