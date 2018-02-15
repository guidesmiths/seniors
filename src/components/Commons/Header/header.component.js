import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import logo from '../../../img/logo.svg';

const HeaderStyle = styled.div `
	background-color: rgba(#fff, 0);
	color: #fff;
	display: flex;
	font-weight: 700;
	font-size: 12px;
	justify-content: space-between;
	padding-bottom: 12px;
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 12px;
	position: fixed;
	text-decoration: none;
	width: 100%;
	z-index: 1;
	nav{
		align-items: center;
		display: flex;
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			a {
				color: #fff;
			}
		}
	}
	@media (min-width: 768px) {
		font-size: 16px;
		padding-bottom: 20px;
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 20px;
	}
	@media (min-width: 1024px) {
		padding-left: 128px;
		padding-right: 128px;
	}
`;

const HeaderStyleScroll = HeaderStyle.extend `
	background-color: rgba(#fff, 100);
	border-bottom: 1px solid #000;
`;

export default class Header extends React.Component {
	render(){
		return(
			<HeaderStyle>
				<img src={logo} alt="logo" height="32px"/>
				<nav>
					<ul>
						<li><a href="/html/">Entrar</a></li>
					</ul>
				</nav>
			</HeaderStyle>
		);
	}
}
