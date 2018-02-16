import * as actionTypes from "./actionTypes";
import * as actions from "./actionCreators";

describe("actions Search", () => {

	test(`${actionTypes.SET_VALUE} with payload`, () => {
		expect(actions.setValue(5)).toEqual({
			type: actionTypes.SET_VALUE,
			payload: {value: 5}
		});
	});

});
