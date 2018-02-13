import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import styled from 'styled-components';
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';
import {Header, Hero, Title, Text, MenuItem, Input, Select, InputContainer, MainContainer, MediumContainer, SmallContainer, ItemIcon, ItemReason, Button, ReasonTextRight, ReasonTextLeft, ReasonTextLeftBold, ReasonTextRightBold, HomeFooter} from './home.component.constants';
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
					<img src={logo} alt="logo" height="50vh"/>
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
					<p>Welcome to the first application that cares about what you care. Find the best caregivers for your elderlies.</p>
				</Hero>
				<InputContainer>
					<Select>
						<option value="Direction">Filtrar por dirección</option>
						<option value="Price">Filtrar por precio</option>
						<option value="Score">Filtrar por valoración</option>
					</Select>
					<Input />
					<Button>Buscar</Button>
				</InputContainer>
				<div>
					<MainContainer>
						<MediumContainer>
							<SmallContainer>
								<ItemIcon>
									<img src={IconA} />
								</ItemIcon>
								<ItemReason>
									<ReasonTextLeftBold>
								Lorem ipsum
									</ReasonTextLeftBold>
									<ReasonTextLeft>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
									</ReasonTextLeft>
								</ItemReason>
							</SmallContainer>
							<SmallContainer>
								<ItemReason>
									<ReasonTextRightBold>
								Lorem ipsum
									</ReasonTextRightBold>
									<ReasonTextRight>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
									</ReasonTextRight>
								</ItemReason>
								<ItemIcon>
									<img src={IconB} />
								</ItemIcon>
							</SmallContainer>
						</MediumContainer>
						<MediumContainer>
							<SmallContainer>
								<ItemIcon>
									<img src={IconC} />
								</ItemIcon>
								<ItemReason>
									<ReasonTextLeftBold>
								Lorem ipsum
									</ReasonTextLeftBold>
									<ReasonTextLeft>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
									</ReasonTextLeft>
								</ItemReason>
							</SmallContainer>
							<SmallContainer>
								<ItemReason>
									<ReasonTextRightBold>
								Lorem ipsum
									</ReasonTextRightBold>
									<ReasonTextRight>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
									</ReasonTextRight>
								</ItemReason>
								<ItemIcon>
									<img src={IconD} />
								</ItemIcon>
							</SmallContainer>
						</MediumContainer>
						<Button>Más</Button>
					</MainContainer>
					<HomeFooter>
				Senior &copy; 2018 Politica de cookies
					</HomeFooter>
				</div>

			</div>

		);
	}
}

Home.propTypes = {
};
