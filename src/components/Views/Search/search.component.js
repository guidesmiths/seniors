import React from "react";
import PropTypes from "prop-types";
import "./search.css";
import logo from '../../../logo.svg';

import { Button } from 'reactstrap';

import Filter from '../../Commons/Filter/filter.container';
import CardList from '../../Commons/CardList/cardList.container';

export default class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	changeNumber = (value) => {
		this.props.setValue(value);
	}

	render(){
		const { value } = this.props;
		return(
			<div className="App">
				<Filter />
				<CardList />
			</div>
		);
	}

}

Search.propTypes = {
	value: PropTypes.number,
	setValue: PropTypes.func
};
