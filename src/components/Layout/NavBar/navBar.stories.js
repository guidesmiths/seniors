import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from './navBar.component.js';
import SearchNav from '../../Commons/SearchNav/searchNav.component.js';

storiesOf('NavBar', module)
	.add('NavBar default', () => (
		<NavBar />
	))
	.add('NavBar green', () => (
		<NavBar  />
	))
	.add('SearchNav', () => (
		<SearchNav />
	));
