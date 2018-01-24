import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

export default handleActions(
	{
		[actions.setFilter]: (state, { payload: { value, type } }) => {
			const reducerByType = {
				duties: () => ({ ...state.duties, value }),
				languages: () => ({ ...state.languages, value }),
				postCode: () => ({ postCode: value }),
				priceRange: () => ({ ...stage.priceRange, value })
			};
			return { ...state,  ...reducerByType[type]() || {}};
		}
	},
	initialState
);
