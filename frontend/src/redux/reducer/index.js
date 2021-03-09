import { combineReducers } from 'redux';

// import reducers here
import { cartReducer } from './cartReducer';
import { getProductsReducer, getProductDetailReducer } from './productReducers';
import { logInReducer } from './logInReducer';

export default combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetail: getProductDetailReducer,
	login: logInReducer,
});
