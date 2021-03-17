import { LOG_IN, LOG_OUT } from '../../constants/loginConstants';

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
