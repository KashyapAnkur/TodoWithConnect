import {createStore,combineReducers} from 'redux';
import CountReducer from '../reducers/CountReducer';
import ProductReducer from '../reducers/ProductReducer';
import Todoreducer from '../reducers/Todoreducer';

// let rootReducer = combineReducers({count: CountReducer, products:ProductReducer});
const store = createStore(Todoreducer);
export default store;