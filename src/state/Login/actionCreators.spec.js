import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("actions Login", () => {

  test(`${actionTypes.SET_VALUE} with payload`, () => {
    expect(actions.setValue(5)).toEqual({
      type: actionTypes.SET_VALUE,
      payload: {value: 5}
    });
  });

  test(`${actionTypes.LOGIN_SUCCESS} with payload`, () => {
    expect(actions.loginSuccess(true, "msg")).toEqual({
      type: actionTypes.LOGIN_SUCCESS,
      payload: {auth: true, msg: "msg"}
    });
  });

  test(`${actionTypes.LOGIN_SUBMIT} with payload`, () => {
    expect(actions.loginSubmit("mail@mail.com", "password", "onSuccess")).toEqual({
      type: actionTypes.LOGIN_SUBMIT,
      payload: {email: "mail@mail.com", password:"password", onSuccess: "onSuccess"}
    });
  });

   test(`${actionTypes.LOGOUT_SUCCESS} with payload`, () => {
    expect(actions.logoutSuccess()).toEqual({
      type: actionTypes.LOGOUT_SUCCESS,
      payload: {}
    });
  });

   test(`${actionTypes.LOGOUT_SUBMIT} with payload`, () => {
    expect(actions.logoutSubmit("onSuccess")).toEqual({
      type: actionTypes.LOGOUT_SUBMIT,
      payload: {onSuccess: "onSuccess"}
    });
  });

   test(`${actionTypes.LOGIN_FAIL} with payload`, () => {
    expect(actions.loginFail("error")).toEqual({
      type: actionTypes.LOGIN_FAIL,
      payload: {error: "error"}
    });
  });

});
