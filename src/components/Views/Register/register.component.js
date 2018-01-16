import React from "react";
import PropTypes from "prop-types";
import "./register.css";


export default class Register extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div>Register</div>
		);
	}

}

Register.propTypes = {
	name: PropTypes.string
};