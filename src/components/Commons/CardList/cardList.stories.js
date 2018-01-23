import { Provider } from 'redux';
import React from 'react';
import { storiesOf } from '@storybook/react';
import CardList from './cardList.component.js';
import data from './mock-data.json';

storiesOf('CardList', module)
	.add('CardList default', () => (
		<div className="flex-container" style={{background: '#f2f2f2', padding: '50px'}}>
			<CardList data={data} />
		</div>
	));