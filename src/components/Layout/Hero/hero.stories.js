import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import Hero from './hero.component.js';


import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Hero', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Hero', () => (

		<Hero />

	));
