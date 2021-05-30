import ProductReducer from "./productReducer";
import {combineReducers} from 'redux';

export default combineReducers({products:ProductReducer});
