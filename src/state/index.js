import { combineReducers } from "redux";

import search from './Search/reducer';
import login from './Login/reducer';
import filter from './Filter/reducer';
import assistants from './Assistants/reducer';

const appReducer = combineReducers({
	search,
	login,
	filter,
	assistants
});

const RootReducer = (state, action) => {
	return appReducer( action.type === "LOGOUT" ? undefined : state, action);
};

export default RootReducer;
