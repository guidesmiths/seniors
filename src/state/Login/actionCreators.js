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
