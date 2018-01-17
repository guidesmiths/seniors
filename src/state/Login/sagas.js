import { call, put, takeLatest, take } from "redux-saga/effects";
import { delay } from 'redux-saga';
import * as userApi from "../../api/user.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";
import * as persistence from "../../persistence/session";

import { push, replace } from 'react-router-redux';

export function* loginSaga(action){
	try{
		const data = yield call(userApi.login, {email: action.payload.email, password: action.payload.password} );
		if(data.success === true){
			yield call(persistence.setSessionToken, data.token);
			yield put(actions.loginSuccess(true, "msgs"));
			action.payload.onSuccess();
		}else{
			yield call(persistence.removeSessionToken);
			yield put(actions.loginFail(data.error));
		}
		
	} catch (error) {
		yield console.log("error", error);
	}
}

export function* logoutSaga(action) {
	try{
		yield call(userApi.logout);
		yield call(persistence.removeSessionToken);
		yield put(actions.logoutSuccess());
		action.payload.onSuccess();
	} catch (error) {
		yield console.log("error", error);
	}
}

/**
 * WATCHERS
 */

export function* watchLogin(){
	yield takeLatest('LOGIN_SUBMIT', loginSaga);
}

export function* watchLogout(){
	yield takeLatest('LOGOUT_SUBMIT', logoutSaga);
}
