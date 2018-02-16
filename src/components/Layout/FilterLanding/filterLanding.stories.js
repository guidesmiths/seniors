import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import FilterLanding from './filterLanding.component.js';


import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Filter Landing', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('FilterLanding', () => (
		<div style={{ padding: '150px'}}>
			<FilterLanding />
		</div>
	));
