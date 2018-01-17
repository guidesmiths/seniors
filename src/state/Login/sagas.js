import { call, put, takeLatest, take } from "redux-saga/effects";
import { delay } from 'redux-saga';
import * as userApi from "../../api/user.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";
import * as persistence from "../../persistence/session";

/**
 * SAGAS
 */

export function* loginSaga(action){
	yield console.log("loginSaga", action);
	yield console.log(actions.loginSuccess);
	yield console.log(actions.setValue);
	try{
		const data = yield call(userApi.login, {email:"juan", password: "pass"} );
		yield console.log(data);
		yield call(persistence.setSessionToken, data.token);
		yield put(actions.loginSuccess(true, "msgs"));
	} catch (error) {
		yield console.log("error");
	}
}

/**
 * WATCHERS
 */

export function* watchLogin(){
	yield takeLatest('SUBMIT_LOGIN', loginSaga);
}
