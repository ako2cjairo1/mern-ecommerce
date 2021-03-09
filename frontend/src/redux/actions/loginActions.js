const { LOG_IN, LOG_OUT } = require('../../constants/loginConstants');

const logInAction = (username) => {
	return {
		type: LOG_IN,
		payload: username,
	};
};

const logOutAction = () => {
	return {
		type: LOG_OUT,
	};
};

export { logInAction, logOutAction };
