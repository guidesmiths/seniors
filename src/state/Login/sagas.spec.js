import { call, put, select } from "redux-saga/effects";
import { loginSaga, logoutSaga } from "./sagas";
import * as selectors from "./selectors";
import * as userApi from "../../api/user.api";
import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";
import * as persistence from "../../persistence/session";

describe("sagas Login", () => {

	describe("loginSaga", () => {

		test("proper login", () => {
			const generator = loginSaga({payload: {email: "admin@mail.com", password: "password", onSuccess: jest.fn() }});
			
			const email = "admin@mail.com";
			const password = "password";

			expect(generator.next().value)
				.toEqual(
					call(userApi.login, {email: email, password: password})
				);

			const data =  {success: true, token: 'mytoken'};

			expect(generator.next(data).value)
				.toEqual(
					call(persistence.setSessionToken, data.token)
				);

			expect(generator.next().value)
				.toEqual(
					put(actions.loginSuccess(true, "msgs"))
				);

			const onSuccess = jest.fn();

			expect(JSON.stringify(generator.next().value))
				.toEqual(
					JSON.stringify(call(onSuccess))
				);
		});

		test("bad login", () => {
			const generator = loginSaga({payload: {email: "badmail@mail.com", password: "password", onSuccess: jest.fn() }});
			
			const email = "badmail@mail.com";
			const password = "password";

			expect(generator.next().value)
				.toEqual(
					call(userApi.login, {email: email, password: password})
				);

			const data =  {success: false, error: 'username or password are wrong'};
	
			expect(generator.next(data).value)
				.toEqual(
					call(persistence.removeSessionToken)
				);

			expect(generator.next(data).value)
				.toEqual(
					put(actions.loginFail(data.error))
				);

		});

	});



	describe("logoutSaga", () => {

		test("proper logout", () => {
			
			const generator = logoutSaga({payload: {onSuccess: jest.fn() }});
			
			expect(generator.next().value)
				.toEqual(
					call(userApi.logout)
				);

			expect(generator.next().value)
				.toEqual(
					call(persistence.removeSessionToken)
				);

			expect(generator.next().value)
				.toEqual(
					put(actions.logoutSuccess())
				);

			const onSuccess = jest.fn();

			expect(JSON.stringify(generator.next().value))
				.toEqual(
					JSON.stringify(call(onSuccess))
				);

		});

	});

});
