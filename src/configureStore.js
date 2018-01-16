import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { myConfig } from './config/environment';

import rootReducer from './state/index';
import initialState from "./state/initial.state";
import rootSagas from './state/sagas-registration';

const sagaMiddleware = createSagaMiddleware();
const isDevToolEnabled = () => myConfig.enableDevTools;

export default function configireStore() {

	let store = createStore(
		rootReducer,
		initialState,
		isDevToolEnabled ? compose(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(rootSagas);

	return store;
}