import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './spinner.component.js';

storiesOf('Spinner', module)
	.add('Spinner default', () => (
		<Spinner />
	))
	.add('Spinner green', () => (
		<Spinner circleColor="#4d4d4d" segmentColor="#34db98" />
	))
	.add('Spinner small', () => (
		<Spinner size={20} />
	));