import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';

export const WholeCard = Flex.extend`
border: 2px solid ${colors.secondary};
width: 90%;
letter-spacing: -0.1px;
position: relative;
`;

export const CardImage = styled.div`
border: 2px solid ${colors.secondary};
width: 20%;
height: 100%;
`;

export const Name = styled.p`
color: ${colors.secondary};
font-size: 30px;
`;

export default class CardContainer1 extends React.Component {
	render(){
		return(
			<WholeCard>
				<CardImage>
      Foto
				</CardImage>
				<Name>Laura Sanchez</Name>
			</WholeCard>
		);
	}
}
