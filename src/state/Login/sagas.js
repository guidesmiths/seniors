import { call, put, takeLatest } from "redux-saga/effects";
import { delay } from 'redux-saga';
import * as userApi from "../../api/user.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

/**
 * SAGAS
 */

export function* loginSaga(action){
	console.log("aa",action);
	yield call(delay,1000);
	yield console.log("loginSaga", action);
	
	try{
		const data = yield call(userApi.login, {email:"juan", password: "pass"} );
		yield console.log(data);
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
