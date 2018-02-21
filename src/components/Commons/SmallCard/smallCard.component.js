import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';
import {Button} from '../../Styles/Buttons';

export const CardImage = styled.img`
border: 2px solid ${colors.secondary};
width: 35%;
height: 62px;
border-radius: 50px;
`;

export const Score = styled.p`
color: ${colors.secondary};
font-size: 15px;
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
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<Flex boxWidth={'180px'}  backgroundFlex={'#fff'} directionLg={'column'} paddingBottom={'10px'} paddingTop={'30px'} marginBox={'12px'}>
				<CardImage src={this.props.photo} alt={'assistant-photo'} />
				<Score>{this.props.score}</Score>
				<Name>{this.props.name}</Name>
				<Price>{this.props.fromPrice} - {this.props.toPrice} €/h</Price>
				<Button>Conoceme</Button>
			</Flex>
		);
	}
}

export default SmallCard;
