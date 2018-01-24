import React from "react";
import PropTypes from "prop-types";
import "./filterHor.css";

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class FilterHor extends React.Component {

	constructor(props){
		super(props);
		this.toggle = this.toggle.bind(this);
		this.changeBoxPosition = this.changeBoxPosition.bind(this);

		this.state = {
			dropdownOpen: false,
			x: null,
			y: null
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		});
	}

	changeBoxPosition(target){

		const position = target.getBoundingClientRect();
		console.log(position);

		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
			x: position.x,
			y: position.y,
		});
	}



	render(){
		return(
			<div className="col-md-12 flex flex-1 flex-row filterHorBar">
				<div className="filterHorItem flex" onClick={(e)=> {this.changeBoxPosition(e.target);}}>
					Price

				</div>
				<div className="filterHorItem flex" onClick={(e)=> {this.changeBoxPosition(e.target);}}>
					Tags
					<div className="filterHorOptions" style={{top: this.state.y, left: this.state.x}}>asdsad</div>
				</div>
				<div className="filterHorItem flex" onClick={(e)=> {this.changeBoxPosition(e.target);}}>
					Cp
				</div>
				<div className="filterHorItem flex" onClick={(e)=> {this.changeBoxPosition(e.target);}}>
					Language
				</div>
				
			</div>
		);
	}

}

FilterHor.propTypes = {
	name: PropTypes.string
};