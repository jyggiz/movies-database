import { combineReducers } from 'redux';

import show from './show';
import loading from './loading'

export default combineReducers({
    show,
    loading
});
