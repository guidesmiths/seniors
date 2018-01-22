import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import { Router, Route, browserHistory } from 'react-router';

import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>, 
	document.getElementById('root'));

registerServiceWorker();