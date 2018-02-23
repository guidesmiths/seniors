import React from "react";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';
import {Button} from '../../Styles/Buttons';

export const CardImage = styled.img`
width: 25%;
height: 30%;
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
font-size: 12px;
text-align: center;
background: #007bff;
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
background: #6c757d;
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

const SmallCardContainer = Flex.extend`
justify-content: center;
@media (min-width: 1030px) {
  width: 30%;
}
@media (min-width: 1150px) {
  width: 22%;
}
`;

class SmallCard extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<SmallCardContainer boxWidth={'40%'} backgroundFlex={'#fff'} directionLg={'column'} paddingBottom={'10px'} paddingTop={'30px'} marginBox={'12px'}>
				<CardImage src={this.props.photo} alt={'assistant-photo'} />
				<Score>{this.props.score}</Score>
				<Name>{this.props.name}</Name>
				<Age>{this.props.age}</Age>
				<Skills>{this.props.skills}</Skills>
				<Languages>{this.props.languages}</Languages>
				<Price>{this.props.fromPrice} - {this.props.toPrice} €/h</Price>
				<Button>Conoceme</Button>
			</SmallCardContainer>
		);
	}
}

export default SmallCard;
