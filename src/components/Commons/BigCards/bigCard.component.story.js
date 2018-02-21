import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import BigCard from './bigCard.js';
import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('CardsGemma', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('BigCard', () => (
		<BigCard />
	));
