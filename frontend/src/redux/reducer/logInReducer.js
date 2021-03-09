const { LOG_IN, LOG_OUT } = require('../../constants/loginConstants');

const initialState = {
	isLogIn: false,
	user: null,
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
