import React from 'react';
import StoryRouter from 'storybook-router';
import { storiesOf } from '@storybook/react';
import CardList from './cardList.component.js';
import data from './mock-data.json';

import { Provider } from 'react-redux';

import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('CardList', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('CardList default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<CardList data={data} />
		</div>
	));