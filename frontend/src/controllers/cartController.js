import axios from 'axios';
import {
	addToCartAction,
	removeFromCartAction,
	resetCartAction,
	getCachedCartAction,
} from '../redux/actions';
import { updateUserCartLocalStorage } from '../utils';

// Async Actions
const addToCart = (id, qty) => async (dispatch, getState) => {
	try {
		let cartItem = getState().cart.cartItems.find((item) => item._id === id);

		// fetch product detail if not found in cartitems yet
		if (!cartItem) {
			const { data } = await axios.get(`/api/products/${id}`);
			cartItem = { ...data, qty };
		} else {
			// use cartItems details from global state
			cartItem = { ...cartItem, qty };
		}

		// update state with the new cartItem deets
		dispatch(addToCartAction(cartItem));
		// update localstorage for offline caching
		updateUserCartLocalStorage(getState().cart.cartItems);
	} catch (error) {
		alert(error.message);
	}
};

const removeFromCart = (id, qty) => async (dispatch, getState) => {
	try {
		// remove item or decrement
		dispatch(removeFromCartAction(id, qty));
		// update localstorage for offline caching
		updateUserCartLocalStorage(getState().cart.cartItems);
	} catch (error) {
		alert(error.message);
	}
};

const checkOutCart = () => async (dispatch, getState) => {
	dispatch(resetCartAction());
	updateUserCartLocalStorage(getState().cart.cartItems);
};

const resetCart = () => async (dispatch, getState) => {
	dispatch(resetCartAction());
};

const getCachedCart = () => async (dispatch, getState) => {
	dispatch(getCachedCartAction());
	updateUserCartLocalStorage(getState().cart.cartItems);
};

export { addToCart, removeFromCart, checkOutCart, resetCart, getCachedCart };
