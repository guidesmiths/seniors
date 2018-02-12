import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import styled from 'styled-components';
import {Header, Hero, Title, Text, MenuItem, Input, Filter} from './home.component1';
import logo from '../../../img/logo.svg';

export default class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className= 'hero'>
				<Header>
					<img src={logo} alt="logo" height="80vh"/>
					<nav>
						<ul className='no-decoration'>
							<MenuItem>
								<a href="/html/" className= 'hero'>Entrar</a>
							</MenuItem>
						</ul>
					</nav>
				</Header>
				<Hero>
					<Title>Seniors</Title>
					<p>Welcome to the first application that cares about what you care. Find the best caregivers for your elderlies when you can not look after them yourselve</p>
				</Hero>
        <Filter>
        <Input />
        <Input />
        </Filter>
			</div>

		);
	}

}

Home.propTypes = {
};
