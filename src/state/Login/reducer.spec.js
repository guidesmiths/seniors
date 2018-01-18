import reducer from './reducer';
import * as actionTypes from "./actionTypes";
import initialState from "./initial.state";

describe('home reducer', () => {

	let state;

	beforeEach(() => {
		state = reducer(undefined, { type: "" });
	});

	test("initial state", () => {
		expect(state).toEqual(initialState);
	});

	test(actionTypes.SET_VALUE, () => {
		const expected = expect(
			reducer(state, {
				type: actionTypes.SET_VALUE,
				payload: { value:6 }
			})
		);
		expected.toHaveProperty("value", 6);
	});

	test(actionTypes.LOGIN_SUBMIT, () => {
		const expected = expect(
			reducer(state, {
				type: actionTypes.LOGIN_SUBMIT,
				payload: { email:"email@email.com", password: "password", onSuccess: "onSuccess" }
			})
		);
		expected.toHaveProperty("isChecking", true);
	});

	test(actionTypes.LOGOUT_SUCCESS, () => {
		const expected = expect(
			reducer(state, {
				type: actionTypes.LOGOUT_SUCCESS,
				payload: {}
			})
		);
		expected.toHaveProperty("auth", false);
	});

	test(actionTypes.LOGIN_SUCCESS, () => {
		const expected = expect(
			reducer(state, {
				type: actionTypes.LOGIN_SUCCESS,
				payload: {auth: true, msg:"msg"}
			})
		);
		expected.toHaveProperty("auth", true);
		expected.toHaveProperty("isChecking", false);
	});

	test(actionTypes.LOGIN_FAIL, () => {
		const expected = expect(
			reducer(state, {
				type: actionTypes.LOGIN_FAIL,
				payload: { error:"error"}
			})
		);
		expected.toHaveProperty("isChecking", false);
		expected.toHaveProperty("error", "error");
	});


});
