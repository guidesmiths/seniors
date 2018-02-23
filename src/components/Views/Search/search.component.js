import React from "react";
import PropTypes from "prop-types";
import Header from '../../Layout/Header/header.component';
import Filter from '../../Commons/Filter/filter.container';
import CardList from '../../Commons/CardList/cardList.container';
import SmallCardsComponent from '../../Commons/SmallCardsComponent/smallCardsComponent.component';
import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';
import ListIcon from '../../../img/list-icon.png';
import Grid from '../../../img/grid.png';
import SearchNav from '../../Commons/SearchNav/searchNav.component';


export default class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			layout: 'grid'
		};
		this.handleClickChangeComponent = this.handleClickChangeComponent.bind(this);
		this.handleClickChangeBack= this.handleClickChangeBack.bind(this);
	}

	handleClickChangeComponent(){
		this.setState( {layout: 'list'});
	}

	handleClickChangeBack(){
		this.setState( {layout: 'grid'});
	}


	changeNumber = (value) => {
		this.props.setValue(value);
	}

	renderItems() {
		if (this.state.layout === 'grid') {
			return <SmallCardsComponent />;
		} else {
			return <CardList />;
		}
	}

	render(){
		const { value } = this.props;
		//const listType = this.state.smallCardsView ? 'SmallCardsComponent' : 'CardList';
		return(
			<div >
				<Header />
				<Flex backgroundFlex={'#24b8ca'} align={'flex-start'} paddingTop={'72px'} paddingTopLg={'72px'} >
					<Filter />
					<Flex directionLg={'column'} boxWidth= {'70%'} align= {'flex-end'}>
						<SearchNav listClickChangeComponent= {this.handleClickChangeComponent} listClickChangeBack= {this.handleClickChangeBack}/>
						{this.renderItems()}
					</Flex>
				</Flex>
			</div>
		);
	}

}

Search.propTypes = {
	value: PropTypes.number,
	setValue: PropTypes.func
};
