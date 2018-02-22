import { Badge } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";

import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';
import {Button} from '../../Styles/Buttons';
const CardItem= Flex.extend `
background: #fff;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 0 rgba(0,0,0,.1);
  padding: 15px;
  padding-top:15px;
`;


export default class Card extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		console.log(this.props.personal);
		const { personal, price, skills, score } = this.props.assistant;
		return(
			<CardItem key={personal.id} backgroundFlex= {'colors.primary'} boxWidth= {'70%'} marginBox= {'10px auto 20px'}>
				<Flex directionLg={'column'} boxWidth= {'auto'} marginBox= {'10px'}>
					<img src={personal.avatar}  alt={personal.name}></img>
					<p >{price.range.from}-{price.range.to}{price.currency}/h</p>
				</Flex>
				<Flex directionLg={'column'} boxWidth= {'auto'} marginBox= {'10px'}>
					<Flex justify={'space-between'}>
						<Flex>
							<h2>{personal.name}</h2>
							<img src={personal.country.flag}  width="20" height="20">
							</img>
							<h2>{personal.age}</h2>
						</Flex>
						<Button> Conóceme </Button>
					</Flex>
					<Flex>
						{skills.duties.map((duty) => <Badge color="primary" key={personal.id+duty+'duty'}>{duty}</Badge>)}
					</Flex>
					<Flex>
						{skills.languages.map((lang) => <Badge color="secondary" key={personal.id+lang+'lang'}>{lang}</Badge>)}
					</Flex>

					<Flex>
						<p>Puntuación:</p>
						<p>
							{[...new Array(5)].map((_, i) =>
								<span key={i+new Date().getTime()} style={{color: (i + 1) <= score ? 'rgb(254, 221, 167)' : 'rgb(216, 216, 216)', fontSize: '40px'}}>•</span>
							)}
						</p>
					</Flex>
					<p>{personal.description}</p>
				</Flex>
			</CardItem>
		);
	}

}

Card.defaultProps = {
	id: 0,
	personal: {
		avatar: "http://www.artofhustle.com/wp-content/uploads/featured/default-avatar_150x150.jpg",
		name: "Unkown",
		age: 40,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		country: {
			flag: "https://cdn.jsdelivr.net/emojione/assets/png/1f1ec-1f1e7.png?v=2.2.7",
			name: "España"
		}
	},
	skills: {
		languages: [ 'Español', 'Inglés' ],
		duties: [ 'Lavar', 'Planchar', 'Cocinar' ]
	},
	score: 4,
	price: {
		range: {
			from: 10,
			to: 15
		},
		currency: "€"
	}
};

Card.propTypes = {
	name: PropTypes.string
};
