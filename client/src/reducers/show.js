import {
    GET_SHOW,
    GET_SHOWS_LIST,
    SEARCH_SHOW,
    CLEAR_SEARCH_SHOWS,
    CLEAR_SHOW_ITEM
} from '../actions/show';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_SHOWS_LIST :
            return {
                ...state,
                shows: action.shows
            };
        case GET_SHOW :
            return {
                ...state,
                show: action.show
            };
        case SEARCH_SHOW :
            return {
                ...state,
                searchShows: action.searchShows
            };
        case CLEAR_SEARCH_SHOWS :
            return {
                ...state,
                searchShows: []
            };
        case CLEAR_SHOW_ITEM :
            return {
                ...state,
                show: []
            };
        default:
            return state;
    }
}
