import { handleActions } from "redux-actions";
import initialState from "./initial.state";
import * as actions from "./actionCreators";

export default handleActions(
	{
		[actions.setFilter]: (state, { payload: { value, type } }) => {
			const reducerByType = {
				duties: () => ({ ...state.duties, ...value }),
				languages: () => ({ ...state.languages, ...value }),
				postCode: () => value ,
				priceRange: () => ({ ...state.priceRange, ...value })
			};
			return { ...state,  [type]: reducerByType[type]() || {}};
		}
	},
	initialState
);
