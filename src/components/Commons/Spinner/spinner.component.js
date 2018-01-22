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
			<div className="loader" style={{borderColor: this.props.circleColor , borderTopColor: this.props.segmentColor}}></div>
		);
	}

}

Spinner.propTypes = {
	circleColor: PropTypes.string,
	segmentColor: PropTypes.string
};

Spinner.defaultProps = {
	circleColor: '#f3f3f3',
	segmentColor: '#3498db'
};
