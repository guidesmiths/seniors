import React from "react";
import PropTypes from "prop-types";
import {Flex} from '../../Styles/Flex';
import Card from "../Card/card.container";
import data from './mock-data.json';

export default class CardList extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		console.log(this.props);
		return(
			<Flex directionLg={'column'}>
				{data.map((as, i)=><Card key={as.id} assistant={as} />)}
			</Flex>
		);
	}

}

CardList.propTypes = {
	name: PropTypes.string
};
