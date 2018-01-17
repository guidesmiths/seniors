import { all, fork } from "redux-saga/effects";

import {
	watchLogin,
	watchLogout
} from "./Login/sagas";

export default function* root() {
	yield all([
		fork(watchLogin),
		fork(watchLogout)
	]);
}
