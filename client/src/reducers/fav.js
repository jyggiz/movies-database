import {
    ADD_FAV_SHOW,
    GET_FAVS_SHOWS,
    DELETE_FAV
} from '../actions/fav';

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_FAV_SHOW :
            return {
                ...state,
                fav: action.favShow
            };
        case GET_FAVS_SHOWS :
            return {
                ...state,
                favs: action.favShows
            };
        case DELETE_FAV:
            return {
                ...state,
                favs: state.fav.favs.filter((show) => show._id !== action._id)
            };
        default:
            return state;
    }
}
