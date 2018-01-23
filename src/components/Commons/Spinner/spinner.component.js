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
			<div className="loader" style={{
				borderColor: this.props.circleColor,
				borderTopColor: this.props.segmentColor,
				width: this.props.size,
				height: this.props.size
			}}></div>
		);
	}

}

Spinner.propTypes = {
	circleColor: PropTypes.string,
	segmentColor: PropTypes.string,
	size: PropTypes.number
};

Spinner.defaultProps = {
	circleColor: '#f3f3f3',
	segmentColor: '#3498db',
	size: 120
};
