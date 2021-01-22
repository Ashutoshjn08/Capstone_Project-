import {combineReducers} from 'redux';
import products from './productsReducer';
import users from './usersReducer'

const rootReducer = combineReducers({products, users});

export default rootReducer;