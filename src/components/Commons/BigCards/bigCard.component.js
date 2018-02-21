import React from "react";
import PropTypes from "prop-types";
import data from '../CardList/mock-data.json';
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';
import  {Button} from '../../Styles/Buttons';


export default class BigCard extends React.Component {

	render(){
		return(
			<Flex boxWidth={'70%'} directionLg={'column'} marginBox={'70px'}>
				{data.map((assistant, index)=>{
					return (
						<Flex key= {assistant.personal.id} backgroundFlex= {'grey'} boxBorder={'1px solid white'}>
							<Flex directionLg={'column'} >
								<img src={assistant.personal.avatar} alt=""/>
								<Flex directionLg={'column'}>
									<h1> {assistant.personal.name} </h1>
									<img src={assistant.personal.country.flag} alt=""/>
									<p>{assistant.score}/5</p>
									<p>{assistant.price.range.from}/{assistant.price.range.to}€ </p>
								</ Flex>
							</ Flex>
							<Flex directionLg={'column'}>
								<p>{assistant.skills.languages}</p>
								<p>{assistant.skills.duties}</p>
								<p>{assistant.personal.description}</p>
								<Button> Conóceme </Button>
							</ Flex>
						</ Flex>
					);
				})}
			</ Flex>

		);
	}

}

BigCard.propTypes = {
	name: PropTypes.string
};
