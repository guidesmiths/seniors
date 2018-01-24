import React from "react";
import PropTypes from "prop-types";
import "./filter.css";

import { FormGroup, Label, Input } from 'reactstrap';

const duties = ['lavar', 'planchar', 'cocinar'];

export default class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			range: {
				from: 5,
				to: 10
			}
		};
	}

	render() {
		console.log(this.props);
		const { duties, priceRange, postCode, languages } = this.props.filter;

		return(
			<div className="col-md-3 flex flex-1 flex-column filterVerBar">
				<div className="filterItem">
					<strong style={{fontSize: '1.5em'}}>¿Cómo es tu ayudante ideal?</strong>
					<br></br>
				</div>
				<div className="filterItem">

					<strong> ¿Qué sabe hacer? </strong>
					<br></br>
					{Object.keys(duties).map((duty) =>
						<MyCheckbox
							key={duty + new Date().getTime()}
							skill={duty} checked={duties[duty]}
							onChange={(checked) => this.props.setFilter( { [duty]: checked}, 'duties')}
						/>
					)}

				</div>

				<div className="filterItem">
					<strong> ¿Qué idiomas sabe hablar? </strong>
					<br></br>
					{Object.keys(languages).map((lang) =>
						<MyCheckbox
							key={lang + new Date().getTime()}
							skill={lang} checked={languages[lang]}
							onChange={(checked) => this.props.setFilter( { [lang]: checked}, 'languages')}
						/>
					)}
				</div>

				<div className="filterItem">
					<strong> Precio </strong>
					<TwoValuesSlider
						from={priceRange.from}
						to={priceRange.to}
						setFrom={(value) => this.props.setFilter({from: value}, 'priceRange')}
						setTo={(value) => this.props.setFilter({to: value}, 'priceRange')}
					/>
				</div>
				<div className="filterItem">
					<strong> Código Postal </strong>
					<input
						className="inputTextFilter"
						name="postalCode"
						type="text"
						value={postCode}
						onChange={(e)=> this.props.setFilter(e.target.value, 'postCode')} />
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