import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import Header from './header.component.js';

import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Header', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Header default', () => (
		<Header/>
	));
