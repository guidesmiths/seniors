import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Header from '../../Commons/Header/header.component';
import Footer from '../../Commons/Footer/footer.component';
import Hero from '../../Layout/Hero/hero.component';
import FilterLanding from '../../Layout/FilterLanding/filterLanding.component';
import Reasons from '../../Layout/Reasons/reasons.component';
import  {colors} from '../../Styles/Variables';


const HomeContainer = styled.div `
font-size:12px;
color: ${colors.light};
font-family: 'Open Sans', sans-serif;
`;

export default class Home extends React.Component {
	render(){
		return(

			<HomeContainer>
				<Header/>
				<Hero/>
				<FilterLanding/>
				<Reasons/>
				<Footer/>
			</HomeContainer>

		);
	}
}
