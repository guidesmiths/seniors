import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";
import * as actionTypes from "./actionTypes";

export default handleActions(
	{
		[actions.setValue]: (state, { payload: { value } }) => {
			return { ...state, value: value };
		},
		[actions.loginSubmit]: (state) => {
			return { ...state, isChecking: true };
		},
		[actions.loginSuccess]: (state, {payload: {auth, msg}} ) => {
			return { ...state, auth: true, isChecking: false };
		},
		[actions.loginFail]: (state, {payload: {error}} ) => {
			return { ...state, isChecking: false, error};
		}
	},
	initialState
);