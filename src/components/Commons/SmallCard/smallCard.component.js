import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';
import {Button} from '../../Styles/Buttons';

export const CardImage = styled.img`
border: 2px solid ${colors.secondary};
width: 35%;
border-radius: 50px;
`;

export const Score = styled.p`
color: ${colors.secondary};
font-size: 10px;
text-align: center;
`;

export const Name = styled.p`
color: ${colors.secondary};
font-size: 20px;
text-align: center;
`;

export const Price = styled.p`
color: ${colors.secondary};
font-size: 10px;
text-align: center;
`;

class SmallCard extends React.Component {
	render(){
		return(
			<Flex boxWidth={'22%'}  backgroundFlex={'#fff'} directionLg={'column'} paddingBottom={'10px'} paddingTop={'10px'} marginBox={'12px'}>
				<CardImage src={this.props.image} alt={'assistant-photo'} />
				<Score>★★★✩✩</Score>
				<Name>Laura Sanchez</Name>
				<Price>10 Euros/h</Price>
				<Button>Conoceme</Button>
			</Flex>
		);
	}
}

export default SmallCard;
