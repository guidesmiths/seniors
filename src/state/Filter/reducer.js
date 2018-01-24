import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

export default handleActions(
	{
		[actions.setFilter]: (state, { payload: { filters } }) => {
			return { ...state,  filters };
		}
	},
	initialState
);
