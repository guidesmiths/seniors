import React from "react";
import { Badge } from "reactstrap";
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

export const Price = styled.p`
color: ${colors.secondary};
font-size: 10px;
text-align: center;
`;

const SmallCardContainer = Flex.extend`
justify-content: center;
  width:80%;
@media (min-width: 768px) {
  width: 40%;
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
				<Flex justify={'center'}>
					{this.props.duties.map((duty) => <Badge color="primary" key={this.props.id+duty+'duty'}>{duty}</Badge>)}
				</Flex>
				<Flex justify={'center'}>
					{this.props.languages.map((lang) => <Badge color="secondary" key={this.props.id+lang+'lang'}>{lang}</Badge>)}
				</Flex>
				<Price>{this.props.fromPrice} - {this.props.toPrice} €/h</Price>
				<Button>Conóceme</Button>
			</SmallCardContainer>
		);
	}
}

export default SmallCard;
