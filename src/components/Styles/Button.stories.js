import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';
import {Button} from './Buttons.js';


import configureStore from '../../configureStore';

const store = configureStore();

storiesOf('Button', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('Button', () => (
		<Button />
	));
