import { updateUserLoginLocalStorage } from '../../utils/updateLocalStorage';
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

const logInUser = (username) => async (dispatch, getState) => {
	// update the global state
	dispatch(logInAction(username));

	updateUserLoginLocalStorage(username, true);
};

const logOutUser = () => async (dispatch, getState) => {
	updateUserLoginLocalStorage(getState().login.user, false);

	dispatch(logOutAction());
};

export { logInUser, logOutUser };
