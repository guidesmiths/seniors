import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Spinner from '../src/components/Commons/Spinner/spinner.component.js';

storiesOf('Spinner', module)
	.add('Spinner default', () => (
		<Spinner />
	))
	.add('Spinner green', () => (
		<Spinner circleColor="#4d4d4d" segmentColor="#34db98" />
	));