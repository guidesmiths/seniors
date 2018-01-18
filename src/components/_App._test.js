import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { Provider } from "react-redux";
import rootReducer from "../state/index";
import { createStore } from "redux";

it('renders without crashing', () => {
	const div = document.createElement("div");
  let store = createStore(rootReducer);
  
	shallow(<Provider store={store}><App /></Provider>);
});