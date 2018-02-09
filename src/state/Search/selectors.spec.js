import * as selectors from "./selectors";
import initialState from "./initial.state";

describe("selectors search", () => {

	const state = {
		root: {
			search: {
				value: 5
			}
		}
	};

	test("value", () => {
		expect(selectors.getValue(state)).toEqual(
			state.root.search.value
		);
	});

});
