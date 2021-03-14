import * as actionType from '../../constants/cartConstants';

const cachedCartItems = () =>
	JSON.parse(localStorage.getItem('mern-ecommerce-cart')) || { cartItems: [] };

const initialState = {
	cartItems: cachedCartItems().cartItems,
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.ADD_TO_CART:
			const item = action.payload;
			const existingItem = state.cartItems.find(
				(cartItem) => cartItem._id === item._id
			);

			if (existingItem) {
				const addQty = item.qty;
				return {
					...state,
					cartItems: state.cartItems.map((cartItem) => {
						if (cartItem._id === item._id) {
							return { ...cartItem, qty: cartItem.qty + addQty };
						} else {
							return cartItem;
						}
					}),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}
		case actionType.REMOVE_FROM_CART:
			const { _id, qty } = action.payload;

			// determine if the item 'qty' needs to be deducted or totally remove from list
			const isToRemove = state.cartItems.find(
				(cartItem) => cartItem._id === _id && cartItem.qty === qty
			);

			if (isToRemove) {
				return {
					...state,
					cartItems: state.cartItems.filter((cartItem) => cartItem._id !== _id),
				};
			} else {
				return {
					...state,
					cartItems: state.cartItems.map((cartItem) => {
						if (cartItem._id === _id) {
							return { ...cartItem, qty: cartItem.qty - qty };
						}
						return cartItem;
					}),
				};
			}
		case actionType.RESET_CART:
			return {
				...state,
				cartItems: [],
			};
		case actionType.GET_CACHED_CART:
			return {
				...state,
				cartItems: cachedCartItems().cartItems,
			};
		// TODO: implement checkout action
		default:
			return state;
	}
};

export { cartReducer };
