import { all, fork } from "redux-saga/effects";

import {
	watchLogin,
	watchLogout
} from "./Login/sagas";

import {
	watchOnFilterChanged
} from "./Filter/sagas";

export default function* root() {
	yield all([
		fork(watchLogin),
		fork(watchLogout),
		fork(watchOnFilterChanged),
	]);
}
