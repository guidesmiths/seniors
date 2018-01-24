import React from "react";
import PropTypes from "prop-types";
import "./filter.css";

import { FormGroup, Label, Input } from 'reactstrap';

const duties = ['lavar', 'planchar', 'cocinar'];

export default class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			duties: duties.reduce((total, duty) => Object.assign(total, { [duty]: false }), {}),
			range: {
				from: 5,
				to: 10
			}
		};
		this.selectDuty = this.selectDuty.bind(this);
	}

	selectDuty(duty) {
		const newDuties = {
			...this.state.duties,
			[duty]: !this.state.duties[duty]
		};
		this.setState({ duties: newDuties });
	}

	render() {
		return(
			<div className="col-md-3 flex flex-1 flex-column filterVerBar">
				<strong style={{fontSize: '1.5em'}}>¿Cómo es tu ayudante ideal?</strong>
				<br></br>
				<div className="filterItem">

					<strong> ¿qué sabe hacer? </strong>
					<br></br>
					{Object.keys(this.state.duties).map((duty) =>
						<MyCheckbox
							key={duty + new Date().getTime()}
							skill={duty} checked={this.state.duties[duty]}
							onChange={(checked) => this.selectDuty(duty)}
						/>
					)}

					<TwoValuesSlider
						from={this.state.range.from}
						to={this.state.range.to}
						setFrom={(value) => this.setState({ range: { ...this.state.range, from: value} }) }
						setTo={(value) => this.setState({ range: { ...this.state.range, to: value} }) }
					/>

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


const TwoValuesSlider = ({from, to, setFrom, setTo}) =>
	<section className="range-slider">
		<span className="rangeValues"></span>
		<input value={from} min="0" max="15" step="0.5" type="range" onChange={(e) => setFrom(e.target.value) }/>
		<input value={to} min="0" max="15" step="0.5" type="range" onChange={(e) => setTo(e.target.value) }/>
	</section>;


Filter.propTypes = {
	name: PropTypes.string
};