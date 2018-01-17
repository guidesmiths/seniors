import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const setValue = createAction(
	actionTypes.SET_VALUE,
	value => ({value})
);

export const loginSuccess  = createAction(
	actionTypes.LOGIN_SUCCESS,
	(auth, msg) => ({auth, msg})
);

export const loginSubmit = createAction(
	actionTypes.LOGIN_SUBMIT,
	(email, password, onSuccess) => ({email, password, onSuccess})
);

export const logoutSubmit = createAction(
	actionTypes.LOGOUT_SUBMIT,
	(onLogout) => ({ onLogout })
);

export const loginFail = createAction(
	actionTypes.LOGIN_FAIL,
	error => ({error})
);
