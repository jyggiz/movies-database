import {
    GET_SHOWS_LIST,
    GET_SHOW,
    SEARCH_SHOW
} from "../actions/show";

export default function loading (state = true, action) {
    switch(action.type){
        case GET_SHOWS_LIST:
            return false;
        case GET_SHOW:
            return false;
        case SEARCH_SHOW:
            return false;
        default :
            return state;
    }
}
