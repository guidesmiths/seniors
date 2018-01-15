import { createAction } from "redux-actions";
import * as actionTypes from "./actionTypes";

export const setValue = createAction(
  actionTypes.SET_VALUE,
  value => ({value})
);