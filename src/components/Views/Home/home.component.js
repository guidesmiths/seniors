import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import styled from 'styled-components';
import Header from '../../Layout/Header/header.component';
import Footer from '../../Commons/Footer/footer.component';
import Hero from '../../Layout/Hero/hero.component';
import FilterLanding from '../../Layout/FilterLanding/filterLanding.component';
import Reasons from '../../Layout/Reasons/reasons.component';
import Video from '../../Layout/Video/video.component';
import {colors} from '../../Styles/Variables';


const HomeContainer = styled.div `
font-family: 'Open Sans', sans-serif;
color: ${colors.light};
font-size: 12px;
`;

export default class Home extends React.Component {
	render(){
		return(

			<HomeContainer>
				<Header/>
				<Hero/>
				<FilterLanding/>
				<Reasons/>
				<Video/>
				<Footer/>
			</HomeContainer>

		);
	}
}
