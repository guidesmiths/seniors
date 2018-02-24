import React from "react";
import PropTypes from "prop-types";
import {Flex} from '../../Styles/Flex';
import Card from "../Card/card.container";
import data from './mock-data.json';
import {IconButton} from '../../Styles/Buttons';

export default class CardList extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			sortByStar: false
		};
		this.updateSort = this.updateSort.bind(this);
	}

	orderForScores(){
		return [...data].sort(function(a, b){return b.score-a.score;});
	}

	updateSort(){
		this.setState({ sortByStar: !this.state.sortByStar });
	}

	renderScore(score) {
		const maxStars = 5;
		const fillStarChars = "★".repeat(score);
		const emptyStarChars = "✩".repeat(maxStars - score);
		return fillStarChars + emptyStarChars;
	}

	render(){
		let itemList = this.state.sortByStar ? this.orderForScores() : data;
		return(
			<Flex directionLg={'column'}>
				<Flex direction={'row'} justify= {'flex-end'} paddingRight= {'5%'}>
					<p>Ordenar por:</p>
					<IconButton onClick={this.updateSort}>★</IconButton>
					<IconButton>€</IconButton>
				</Flex>
				{itemList.map((as, i)=><Card key={as.id} assistant={as} score={this.renderScore(as.score)} />)}
			</Flex>
		);
	}

}

CardList.propTypes = {
	name: PropTypes.string
};
