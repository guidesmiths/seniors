import { call, put, select, takeEvery } from "redux-saga/effects";
import * as assistantApi from "../../api/assistant.api";
import * as actionTypes from "./actionTypes";
import * as selectors from "./selectors";
import * as actions from "./actionCreators";
import * as assistantActions from "../Assistants/actionCreators";
import { onFilterChanged } from "./actionCreators";

/**
 * SAGAS
 */

export function* processFilterChange({ payload: { value, type } }) {
	try {
		yield put(actions.setFilter(value, type));
		const filter = yield select(selectors.getFilters);
		const { data } = yield call(assistantApi.fetchData, filter);
		yield put(assistantActions.setAssistants(data));
	} catch(error) {
		console.log(error);
	}
}

/**
 * WATCHERS
 */

export function* watchOnFilterChanged() {
	yield takeEvery(actionTypes.FILTER_CHANGED, processFilterChange);
}