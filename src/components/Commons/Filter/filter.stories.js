import React from 'react';
import { storiesOf } from '@storybook/react';
import Filter from './filter.component.js';

storiesOf('Filter', module)
	.add('Filter default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<Filter />
		</div>
	));