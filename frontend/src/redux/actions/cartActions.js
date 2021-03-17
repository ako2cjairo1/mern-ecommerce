import * as actionTypes from '../../constants/cartConstants';

// action creators
const addToCartAction = (cartItem) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: cartItem,
	};
};

const removeFromCartAction = (_id, qty) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: { _id, qty },
	};
};

const resetCartAction = () => {
	return {
		type: actionTypes.RESET_CART,
	};
};

const getCachedCartAction = () => {
	return {
		type: actionTypes.GET_CACHED_CART,
	};
};

export {
	addToCartAction,
	removeFromCartAction,
	resetCartAction,
	getCachedCartAction,
};
