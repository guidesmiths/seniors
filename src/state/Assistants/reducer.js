import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

export default handleActions(
	{
		[actions.setAssistants]: (state, { payload }) => {
			return [...payload];
		}
	},
	initialState
);
