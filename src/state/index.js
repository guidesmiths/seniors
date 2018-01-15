import { combineReducers } from "redux";


const appReducer = combineReducers({
	//nameOfTheREducer
});

const RootReducer = (state, action) => {
	return appReducer( action.type === "LOGOUT" ? undefined : state, action);
}

export default RootReducer;