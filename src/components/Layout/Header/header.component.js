import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Logo from '../../Commons/Logo/logo.component';

const HeaderStyle = styled.div `
	background-color: rgba(255, 255, 255, ${props => props.scrolled || props.appearance ? 1 : 0});
	color: ${props => props.scrolled || props.appearance ? '#24b8ca' : '#fff'};
	border-bottom: 1px ${props => props.scrolled || props.appearance ? 'solid' : 'none'} #24b8ca;
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
	transition: background-color ease .6s, color ease .6s, border-bottom ease .6s;
	width: 100%;
	z-index: 2;
	a {
		color: currentColor;
	}
	nav {
		align-items: center;
		display: flex;
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
		}
	}
	@media (min-width: 768px) {
		font-size: 16px;
		padding-left: 32px;
		padding-right: 32px;
	}
	@media (min-width: 1024px) {
		padding-left: 128px;
		padding-right: 128px;
	}
`;

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolled: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0 || !this.state.scrolled) {
				this.setState({ scrolled: true});
			} else {
				this.setState({ scrolled: false});
			}
		});
	}

	render() {
		return(
			<HeaderStyle appearance={this.props.appearance} scrolled={this.state.scrolled} >
				<Logo/>
				<nav>
					<ul>
						<li><a href="/login">Entrar</a></li>
					</ul>
				</nav>
			</HeaderStyle>
		);
	}
}
