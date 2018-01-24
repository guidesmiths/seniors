import React from "react";
import PropTypes from "prop-types";
import "./filter.css";

import { FormGroup, Label, Input } from 'reactstrap';

export default class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lavar: false,
			planchar: false
		};
	}

	render() {
		return(
			<div className="col-md-3 flex flex-1 flex-column filterVerBar">
				<strong style={{fontSize: '1.5em'}}>¿Cómo es tu ayudante ideal?</strong>
				<br></br>
				<div className="filterItem">

					<strong> ¿qué sabe hacer? </strong>
					<br></br>
					<MyCheckbox skill="Lavar" checked={this.state.lavar} onChange={(checked) => this.setState({lavar: checked })}/>
					<MyCheckbox skill="Planchar" checked={this.state.planchar} onChange={(checked) => this.setState({planchar: checked })}/>
				</div>

			</div>
		);
	}

}

const MyCheckbox = ({ skill, checked, onChange }) =>
	<div>
		<label>
			<input
				name="isGoing"
				type="checkbox"
				checked={checked}
				onChange={(e)=>onChange(e.target.checked) } />{' '}
			{skill}
		</label>
	</div>;

Filter.propTypes = {
	name: PropTypes.string
};