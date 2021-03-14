import { LOG_IN, LOG_OUT } from '../../constants/loginConstants';

const cachedUser = JSON.parse(localStorage.getItem('mern-ecommerce-cart')) || {
	isLogIn: false,
	user: null,
};

const initialState = {
	isLogIn: cachedUser.isLogIn,
	user: cachedUser.user,
};

export const logInReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogIn: true,
				user: action.payload,
			};
		case LOG_OUT:
			return {
				...state,
				isLogIn: false,
				user: null,
			};
		default:
			return state;
	}
};
