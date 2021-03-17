import { logInAction, logOutAction } from '../redux/actions';
import { updateUserLoginLocalStorage } from '../utils/updateLocalStorage';

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
