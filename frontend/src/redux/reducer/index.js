import { combineReducers } from 'redux';

// import reducers here
import { cartReducer } from './cartReducer';
import { getProductsReducer, getProductDetailReducer } from './productReducers';

export default combineReducers({
	cart: cartReducer,
	getProducts: getProductsReducer,
	getProductDetail: getProductDetailReducer,
});
