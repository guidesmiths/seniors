import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const setFilter = createAction(
	actionTypes.SET_FILTER,
	value => ({value})
);