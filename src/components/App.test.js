import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import reducer from "../state/index";
import { createStore } from "redux";

it('renders without crashing', () => {
	const div = document.createElement('div');
	let store = createStore(reducer);

	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});