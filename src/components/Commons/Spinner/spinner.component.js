import React from "react";
import PropTypes from "prop-types";
import "./spinner.css";


export default class Spinner extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className="loader"></div>
		);
	}

}

Spinner.propTypes = {
	name: PropTypes.string
};