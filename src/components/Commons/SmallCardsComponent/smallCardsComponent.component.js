import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import SmallCard from '../SmallCard/smallCard.component';
import {Flex} from '../../Styles/Flex';
import {IconButton} from '../../Styles/Buttons';
import {colors} from '../../Styles/Variables';
import data from '../CardList/mock-data.json';


class SmallCardsComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			sortByStar: false,
			sortByPrice: false
		};
	}

		updateSort = () => {
			this.setState({
				sortByPrice: false,
				sortByStar: !this.state.sortByStar });
		}

	updateByPrice = () => {
		this.setState({
			sortByStar: false,
			sortByPrice: !this.state.sortByPrice });
	}

	reorder = () => {
		if (this.state.sortByPrice) {
			return [...data].sort(function(a, b){return a.price.range.from-b.price.range.from;});
		}
		if (this.state.sortByStar){
			return [...data].sort(function(a, b){return b.score-a.score;});
		}
	}

	renderScore(score) {
		const maxStars = 5;
		const fillStarChars = "★".repeat(score);
		const emptyStarChars = "✩".repeat(maxStars - score);
		return fillStarChars + emptyStarChars;
	}

	render(){
		let itemList = this.state.sortByStar || this.state.sortByPrice ? this.reorder() : data;

		return(
			<Flex boxWidth={'100%'} directionLg={'column'} marginTop={'50px'}>
				<Flex direction={'row'} justify={'flex-end'} paddingRight= {'5%'}>
					<p>Ordenar por:</p>
					<IconButton onClick={this.updateSort}>★</IconButton>
					<IconButton onClick={this.updateByPrice}>€</IconButton>
				</Flex>
				<Flex justify={'center'} boxWidth={'100%'} flexWrap={'wrap'}>
					{itemList.map((assistant)=>{
						return (
							<SmallCard
								key={assistant.id}
								name={assistant.personal.name}
								photo={assistant.personal.avatar} fromPrice={assistant.price.range.from} toPrice={assistant.price.range.to}
								age={assistant.personal.age + ' años'}
								duties={assistant.skills.duties}
								languages={assistant.skills.languages}
								score={this.renderScore(assistant.score)} />
						);
					})}
				</Flex>
			</Flex>

		);
	}
}

export default SmallCardsComponent;
