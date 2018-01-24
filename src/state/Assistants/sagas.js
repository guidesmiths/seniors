import { call, put, select, takeEvery } from "redux-saga/effects";
import * as assistantApi from "../../api/assistant.api";
import * as actionTypes from "./actionTypes";
import * as selectors from "./selectors";
import * as actions from "./actionCreators";
import { onFilterChanged } from "./actionCreators";

/**
 * SAGAS
 */

export function* processFilterChange({ payload: { value, type } }) {
	// fetch data from api
	// refresh data
	try {
		yield put(actions.setFilter(value, type));
		const filter = yield select(selectors.getFilters);
		console.log(filter);
		const { data } = yield call(assistantApi.fetchData, filter);
		console.log(data);
	} catch(error) {
		console.error(error);
	}
//     yield put(actions.startGetKeyValue());
//     try {
//     yield put(actions.resolveGetKeyValue(key, value));
//     } catch (error) {
//     yield put(actions.rejectGetKeyValue(error.message));
//     } finally {
//     yield put(appActions.appIsWaiting(false));
// }
}

/**
 * WATCHERS
 */

export function* watchOnFilterChanged() {
	yield takeEvery(actionTypes.FILTER_CHANGED, processFilterChange);
}