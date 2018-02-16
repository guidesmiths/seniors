import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import Footer from './footer.component.js';
import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('Footer', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Footer', () => (
		<Footer />
	));
