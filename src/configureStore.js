import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
 
import createHistory from 'history/createBrowserHistory';

import { myConfig } from './config/environment';

import rootReducer from './state/index';
import initialState from "./state/initial.state";
import rootSagas from './state/sagas-registration';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory() ;

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const isDevToolEnabled = () => myConfig.enableDevTools;

export default function configureStore() {

	let store = createStore(
		combineReducers({
			root: rootReducer,
			routerReducer
		}),
		//rootReducer,
		initialState,
		isDevToolEnabled ? composeEnhancers(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(rootSagas);

	return store;
}