import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import styled from 'styled-components';
import Header from '../../Commons/Header/header.component';
import Footer from '../../Commons/Footer/footer.component';
import Hero from '../../Layout/Hero/hero.component';
import FilterLanding from '../../Layout/FilterLanding/filterLanding.component';
import Reasons from '../../Layout/Reasons/reasons.component';

export default class Home extends React.Component {
	render(){
		return(

			<div>
				<Header/>
				<Hero/>
				<FilterLanding/>
				<Reasons/>
				<Footer/>
			</div>

		);
	}
}
