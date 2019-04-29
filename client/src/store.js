import { createStore } from 'redux';
import reducer from './reducers/index';
import middleware from './middleware/index';

export default createStore(reducer, middleware);
