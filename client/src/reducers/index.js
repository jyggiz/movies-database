import { combineReducers } from 'redux';

import show from './show';
import fav from './fav';
import loading from './loading'

export default combineReducers({
    show,
    loading,
    fav
});
