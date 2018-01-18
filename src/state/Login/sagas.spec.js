import { call, put, select } from "redux-saga/effects";
import { loginSaga } from "./sagas";
import * as selectors from "./selectors";
import * as userApi from "../../api/user.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";
import * as persistence from "../../persistence/session";

describe("sagas Login", () => {

	describe("loginSaga", () => {

		test("proper flow", () => {
			const generator = loginSaga();

			console.log(generator.next());
			/*
      const time = Date.now();
      const userId = '111-111-11';


      expect(generator.next().value).toEqual(select(getCustomerId));
      expect(generator.next(userId).value).toEqual(call(fetchLastContact, userId));
      expect(generator.next(time).value).toEqual(put(resolveLastContact(time)));
      expect(generator.next().done).toEqual(true);*/
		});

		/*test("throwed flow", () => {
      const generator = getCustomerLastContactSaga();
      const userId = '111-111-11';
      expect(generator.next().value).toEqual(select(getCustomerId));
      expect(generator.next(userId).value).toEqual(call(fetchLastContact, userId));
      expect(generator.throw(new Error('This is bad..')).value).toEqual(put(resolveLastContact('')));
      expect(generator.next().done).toEqual(true);
    });
    */

	});
});

/*
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

export function* watchLogin(){
  yield takeLatest('LOGIN_SUBMIT', loginSaga);
}

export function* watchLogout(){
  yield takeLatest('LOGOUT_SUBMIT', logoutSaga);
}
*/