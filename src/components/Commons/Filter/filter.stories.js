import React from 'react';
import StoryRouter from 'storybook-router';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

import Filter from './filter.component.js';

import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Filter', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Filter default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<Filter />
		</div>
	));



