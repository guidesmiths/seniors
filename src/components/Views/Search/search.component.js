import React from "react";
import PropTypes from "prop-types";
import Header from '../../Layout/Header/header.component';
import Filter from '../../Commons/Filter/filter.container';
//import CardList from '../../Commons/CardList/cardList.container';
import SmallCardsComponent from '../../Commons/SmallCardsComponent/smallCardsComponent.component';
import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';

export default class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	changeNumber = (value) => {
		this.props.setValue(value);
	}

	render(){
		const { value } = this.props;
		return(
			<div>
				<Header style={{background: 'blue'}}/>
				<Flex backgroundFlex={'#24b8ca'}>
					<Filter />
					<SmallCardsComponent />
				</Flex>
			</div>
		);
	}

}

Search.propTypes = {
	value: PropTypes.number,
	setValue: PropTypes.func
};

//<CardList />
