import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const setAssistants = createAction(
	actionTypes.SET_ASSISTANTS,
	data => data
);