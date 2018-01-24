import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import logo from '../../../logo.svg';

import { Button } from 'reactstrap';

import Filter from '../../Commons/Filter/filter.container';

export default class Home extends React.Component {
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
			</div>
		);
	}

}

Home.propTypes = {
	value: PropTypes.number,
	setValue: PropTypes.func
};
