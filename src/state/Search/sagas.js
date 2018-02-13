import { call, put, takeLatest } from "redux-saga/effects";
import * as searchApi from "../../api/search.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";
import appActions from "../app/app.actions";

/**
 * SAGAS
 */
/*
export function* getKeyValueSaga({ payload: key }) {
  yield put(appActions.appIsWaiting(true));
  yield put(actions.startGetKeyValue());
  try {
    const { value } = yield call(searchApi.getKeyValue, key);
    yield put(actions.resolveGetKeyValue(key, value));
  } catch (error) {
    yield put(actions.rejectGetKeyValue(error.message));
  } finally {
    yield put(appActions.appIsWaiting(false));
  }
}

export function* updateKeyValueSaga({ payload: { key, value } }) {
  yield put(appActions.appIsWaiting(true));
  yield put(actions.startUpdateKeyValue());
  try {
    yield call(searchApi.updateKeyValue, value, key);
    yield put(actions.resolveUpdateKeyValue(key, value));
  } catch (error) {
    yield put(actions.rejectUpdateKeyValue(error.message));
  } finally {
    yield put(appActions.appIsWaiting(false));
  }
}
*/
/**
 * WATCHERS
 */

/*
export function* watchGetKeyValue() {
  yield takeLatest(actionTypes.GET_KEY_VALUE, getKeyValueSaga);
}

export function* watchUpdateKeyValueSaga() {
  yield takeLatest(actionTypes.UPDATE_KEY_VALUE, updateKeyValueSaga);
}
*/
