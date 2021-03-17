import { LOCAL_STORAGE_KEY } from '../constants/globalConstants';

const getLocalStorage = () => {
	return (
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {
			user: null,
			isLogIn: false,
			cartItems: [],
		}
	);
};

const updateUserLoginLocalStorage = (username, isLoggedIn) => {
	const { user, cartItems: cachedCartItems } = getLocalStorage();
	// check cached cart items for logged-in user
	const userCartItems = user === username ? cachedCartItems : [];

	const updatedUserCart = {
		isLogIn: isLoggedIn,
		user: username,
		cartItems: userCartItems,
	};

	// update cached cart items for currently logged-in user
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUserCart));
};

const updateUserCartLocalStorage = (cartItems) => {
	const { isLogIn, user } = getLocalStorage();
	const updatedUserCart = {
		isLogIn,
		user,
		cartItems,
	};
	// update cached cart items for currently logged-in user
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedUserCart));
};

export { updateUserLoginLocalStorage, updateUserCartLocalStorage };
