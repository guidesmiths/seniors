import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';
//import WholeCard from './WholeCard/wholeCard';

export const WholeCardContainer = Flex.extend`
background: ${colors.primary};
width: 75%;
letter-spacing: -0.1px;
position: relative;
`;

export default class CardContainer1 extends React.Component {
	render(){
		return(
			<WholeCardContainer>

			</WholeCardContainer>
		);
	}
}
