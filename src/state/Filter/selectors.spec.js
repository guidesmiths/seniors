import * as selectors from "./selectors";
import initialState from "./initial.state";

describe("selectors Search", () => {

	const state = {
		root: {
			filter: {
				duties: [],
				languages: [],
				postCode: '',
				priceRange: {
					from: 0,
					to: 1000
				}
			}
		}
	};

	test("value", () => {
		expect(selectors.getValue(state)).toEqual(
			state.root.search.value
		);
	});

});
