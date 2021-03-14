const getLocalStorage = () => {
	return (
		JSON.parse(localStorage.getItem('mern-ecommerce-cart')) || {
			user: null,
			isLogIn: false,
			cartItems: [],
		}
	);
};

export const updateUserLoginLocalStorage = (username, isLoggedIn) => {
	const { user, cartItems: cachedCartItems } = getLocalStorage();
	// check cached cart items for logged-in user
	const userCartItems = user === username ? cachedCartItems : [];

	const updatedUserCart = {
		isLogIn: isLoggedIn,
		user: username,
		cartItems: userCartItems,
	};

	// update cached cart items for currently logged-in user
	localStorage.setItem('mern-ecommerce-cart', JSON.stringify(updatedUserCart));
};

export const updateUserCartLocalStorage = (cartItems) => {
	const { isLogIn, user } = getLocalStorage();
	const updatedUserCart = {
		isLogIn,
		user,
		cartItems,
	};
	// update cached cart items for currently logged-in user
	localStorage.setItem('mern-ecommerce-cart', JSON.stringify(updatedUserCart));
};
