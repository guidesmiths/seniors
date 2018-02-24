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

const CardsContainer = Flex.extend`
justify-content: center;
  width:100%;
@media (min-width: 768px) {
  width: 70%;
}
`;


export default class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			layout: 'grid',
			smallScreen: false
		};
	}

	handleClickChangeComponent = () => {
		this.setState( {layout: 'list'});
	}

	handleClickChangeBack = () => {
		this.setState( {layout: 'grid'});
	}

	checkScreenSize = () => {
		if (window.innerWidth < 1024){
			this.setState( {smallScreen: true});
		} else {
			this.setState( {smallScreen: false});
		}
	};

	componentDidMount(){
		this.checkScreenSize();
		window.addEventListener('resize', this.checkScreenSize);
	}

	changeNumber = (value) => {
		this.props.setValue(value);
	}

	renderItems() {
		if (this.state.layout === 'grid' || this.state.smallScreen) {
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
				<Header appearance="solid" />
				<Flex backgroundFlex= {'rgba(36, 184, 202, .1)'} align={'flex-start'} paddingTop={'72px'} paddingTopLg={'72px'} >
					<Filter />
					<CardsContainer directionLg={'column'} align= {'flex-end'} justify={'center'} direction={'row'}>
						<SearchNav listClickChangeComponent= {this.handleClickChangeComponent} listClickChangeBack= {this.handleClickChangeBack}/>
						{this.renderItems()}
					</CardsContainer>
				</Flex>
			</div>
		);
	}

}

Search.propTypes = {
	value: PropTypes.number,
	setValue: PropTypes.func
};
