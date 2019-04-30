import axios from 'axios';

export const GET_FAVS_SHOWS = 'GET_FAVS_SHOWS';
export const DELETE_FAV = 'DELETE_FAV';
export const ADD_FAV_SHOW = 'ADD_FAV';

export const addFavShow = (favShow) => {
    return {
        type: ADD_FAV_SHOW,
        favShow
    }
};

export const handleAddFavShow = (show) => (dispatch) => {
    axios.post(`/api/fav/`, show)
        .then(({ data }) => {
            console.log(1);
            dispatch(addFavShow(data));
        })
        .catch(error => {
            console.log(error);
        });

};

export const getFavShows = (favShows) => ({
    type: GET_FAVS_SHOWS,
    favShows
});

export const handleGetFavShows = () => (dispatch) => {
    axios.get(`/api/fav/`)
        .then(({ data }) => {
            dispatch(getFavShows(data));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteFav = (_id) => ({
    type: DELETE_FAV,
    _id
});

export const handleDeleteFav= (_id) => dispatch => {
    axios
        .get(`/api/fav/${_id}`)
        .then((data) => {
            dispatch(deleteFav(_id));
        })
        .catch((error) => {
            console.log(error);
        })
};

