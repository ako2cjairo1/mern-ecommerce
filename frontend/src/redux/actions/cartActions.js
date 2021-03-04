import axios from 'axios';
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

const updateLocalStorage = (currentState) => {
	// update localstorage for offline caching
	localStorage.setItem('mern-ecommerce-cart', JSON.stringify(currentState));
};

// Async Actions
const addToCart = (id, qty) => async (dispatch, getState) => {
	try {
		let cartItem = getState().cart.cartItems.find((item) => item._id === id);
		cartItem = { ...cartItem, qty };

		if (cartItem) {
			// fetch product detail if not found in cartitems
			const { data } = await axios.get(`/api/products/${id}`);
			cartItem = { ...data, qty };
		}

		// update state with the new cartItem deets
		dispatch(addToCartAction(cartItem));
		// update localstorage for offline caching
		updateLocalStorage(getState().cart.cartItems);
	} catch (error) {
		console.log('addToCart action ERROR', error);
	}
};

const removeFromCart = (id, qty) => async (dispatch, getState) => {
	try {
		// remove item or decrement
		dispatch(removeFromCartAction(id, qty));
		// update localstorage for offline caching
		updateLocalStorage(getState().cart.cartItems);
	} catch (error) {
		console.log('removeFromCart action ERROR', error);
	}
};

export { addToCart, removeFromCart };
