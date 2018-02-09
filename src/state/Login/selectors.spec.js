import * as selectors from "./selectors";
import initialState from "./initial.state";

describe("selectors Search", () => {

	const state = {
		root: {
			login: {
				value: 5,
				auth: false,
				isChecking: false,
				error: "error"
			}
		}
	};

	test("value", () => {
		expect(selectors.getValue(state)).toEqual(
			state.root.login.value
		);
	});

	test("isChecking", () => {
		expect(selectors.getIsChecking(state)).toEqual(
			state.root.login.isChecking
		);
	});

	test("error", () => {
		expect(selectors.getError(state)).toEqual(
			state.root.login.error
		);
	});

});
