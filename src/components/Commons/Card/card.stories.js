import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import Card from './card.container.js';
import data from './mock-data.json';

import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Card', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Card default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<Card assistant={data} />
		</div>
	));
