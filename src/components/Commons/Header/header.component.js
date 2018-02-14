import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import logo from '../../../img/logo.svg';

const HeaderStyle = styled.div`
padding: 12px 16px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: transparent;
`;

const MenuItem = styled.li `
text-decoration: none;
color: white;
font-weight:bold;
font-size:12px;
letter-spacing:-0.1px;
@media (min-width: 768px) {
  font-size: 16px;
    }
`;

export default class Header extends React.Component {
	render(){
		return(
			<HeaderStyle>
				<img src={logo} alt="logo" height="50vh"/>
				<nav>
					<ul className='no-decoration'>
						<MenuItem>
							<a href="/html/" className= 'hero'>Entrar</a>
						</MenuItem>
					</ul>
				</nav>
			</HeaderStyle>
		);
	}
}
