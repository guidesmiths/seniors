import { combineReducers } from "redux";

import home from './Home/reducer';
import login from './Login/reducer';
import filter from './Filter/reducer';
import assistants from './Assistants/reducer';

const appReducer = combineReducers({
	home,
	login,
	filter,
	assistants
});

const RootReducer = (state, action) => {
	return appReducer( action.type === "LOGOUT" ? undefined : state, action);
};

export default RootReducer;