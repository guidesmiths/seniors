import { all, fork } from "redux-saga/effects";

/*import watchers*/

export default function* root() {
	yield all([
		//fork(watchNameSaga)
	]);
}
