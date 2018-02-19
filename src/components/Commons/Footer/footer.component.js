import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';

export const FooterStyle = Flex.extend`
background: ${colors.dark};
height: 92px;
text-weight: 600;
letter-spacing: -0.1px;
`;

export default class Footer extends React.Component {
	render(){
		return(
			<FooterStyle directionLg={'column'}>
				<p>
          Política de cookies
				</p>
				<p>
          Seniors &copy; 2018
				</p>
			</FooterStyle>
		);
	}
}
