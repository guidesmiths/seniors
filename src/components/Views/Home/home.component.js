import React from "react";
import PropTypes from "prop-types";
import "./home.css";


export default class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<h1>Home</h1>
		);
	}

}

Home.propTypes = {
};
