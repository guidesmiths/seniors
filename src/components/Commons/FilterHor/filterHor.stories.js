import React from 'react';
import { storiesOf } from '@storybook/react';
import FilterHor from './filterHor.component.js';

storiesOf('FilterHor', module)
	.add('Filter default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<FilterHor />
		</div>
	));