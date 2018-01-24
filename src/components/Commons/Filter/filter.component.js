import React from "react";
import PropTypes from "prop-types";
import "./filter.css";

import { FormGroup, Label, Input } from 'reactstrap';

export default class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			dutiesByName: ['lavar', 'planchar', 'cocinar'],
			dutiesSelected: [],
			range: {
				from: 5,
				to: 10
			}
		};
		this.selectDutie = this.selectDutie.bind(this);
	}

	selectDutie(dutie){
		let oldDuties = [...this.state.dutiesSelected];
		if( oldDuties.indexOf(dutie) >= 0){
			oldDuties.splice(oldDuties.indexOf(dutie),1);
		}else{
			oldDuties.push(dutie);
		}

		this.setState({dutiesSelected: oldDuties});
	}

	render() {
		return(
			<div className="col-md-3 flex flex-1 flex-column filterVerBar">
				<strong style={{fontSize: '1.5em'}}>¿Cómo es tu ayudante ideal?</strong>
				<br></br>
				<div className="filterItem">

					<strong> ¿qué sabe hacer? </strong>
					<br></br>
					{this.state.dutiesByName.map((dutie, i) => 
						<MyCheckbox
							key={dutie + new Date().getTime()}
							skill={dutie} checked={this.state.dutiesSelected.indexOf(dutie) >= 0}
							onChange={(checked) => this.selectDutie(dutie)}
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