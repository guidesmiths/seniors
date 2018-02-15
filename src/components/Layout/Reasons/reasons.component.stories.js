import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { Provider } from 'react-redux';

import RightReason from './ReasonsComponents/rightReason.component.js';
import LeftReason from './ReasonsComponents/leftReason.component.js';
import configureStore from '../../../configureStore';

const store = configureStore();

storiesOf('ReasonsPair', module)
	.addDecorator(StoryRouter())
	.addDecorator((render) => (
		<Provider store={store}>
			{render()}
		</Provider>
	))
	.add('RightReason', () => (
		<div>
			<RightReason />
		</div>
	))
	.add('LeftReason', () => (
		<div>
			<LeftReason />
		</div>
	));
