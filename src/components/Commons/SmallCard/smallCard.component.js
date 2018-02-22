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


export const Age = styled.p`
color: ${colors.secondary};
font-size: 12px;
margin-top: -20px;
text-align: center;
`;

export const Skills = styled.p`
color: ${colors.secondary};
font-size: 12px;
text-align: center;
background: blue;
color: #fff;
display; inline;
margin-top: -5px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
`;

export const Languages = styled.p`
color: ${colors.secondary};
font-size: 12px;
text-align: center;
background: red;
color: #fff;
display; inline;
margin-top: -5px;
margin-bottom: 2px;
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
				<Age>{this.props.age}</Age>
				<Skills>{this.props.skills}</Skills>
				<Languages>{this.props.languages}</Languages>
				<Price>{this.props.fromPrice} - {this.props.toPrice} €/h</Price>
				<Button>Conoceme</Button>
			</Flex>
		);
	}
}

export default SmallCard;
