import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';

export const FooterStyle = styled.div`
	padding-bottom: 36px;
	padding-top: 36px;
	background: ${colors.dark};
	text-weight: 600;
	text-align:center;
	p {
		margin: 0;
	}
	@media (min-width: 1024px) {
		padding-bottom: 48px;
		padding-top: 48px;
	}
`;

export default class Footer extends React.Component {
	render(){
		return(
			<FooterStyle directionLg={'column'}>
				<p>Política de cookies</p>
				<p>Seniors &copy; 2018</p>
			</FooterStyle>
		);
	}
}
