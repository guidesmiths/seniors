import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './navBar.component.js';

storiesOf('NavBar', module)
	.add('NavBar default', () => (
		<NavBar />
	))
	.add('NavBar green', () => (
		<NavBar  />
	));