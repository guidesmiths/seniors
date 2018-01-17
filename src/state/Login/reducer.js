import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";
import * as actionTypes from "./actionTypes";

export default handleActions(
	{
		[actions.setValue]: (state, { payload: { value } }) => {
			return { ...state, value: value };
		},
		[actions.loginSuccess]: (state, {payload: {auth, msg}} ) => {
			return { ...state, auth: true };
		}
	},
	initialState
);