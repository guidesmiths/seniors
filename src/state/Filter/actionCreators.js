import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const setFilter = createAction(
	actionTypes.SET_FILTER,
	(value, type) => ({ value, type })
);

export const onFilterChanged = createAction(
	actionTypes.FILTER_CHANGED,
	(value, type) => ({ value, type })
);