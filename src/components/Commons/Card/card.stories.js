import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './card.component.js';

storiesOf('Card', module)
	.add('Card default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<Card />
		</div>
	));