import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import SmallCard from '../SmallCard/smallCard.component';
import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';
import data from '../CardList/mock-data.json';


class SmallCardsComponent extends React.Component {
	// constructor(props){
	//   super(props);
	//   this.state = {
	//     assistantScore: ""
	//   }
	render(){
		return(
			<Flex boxWidth={'70%'}>
				<Flex boxWidth={'100%'} backgroundFlex={'red'} justify={'flex-start'} flexWrap={'wrap'}>

					{data.sort(function(a, b){return b.score-a.score;})
						.map((assistant, index)=>{
							let assistantScore;
							if(assistant.score==5){
								assistantScore= "★★★★★";
							} else if(assistant.score==4){
								assistantScore= '★★★★✩';
							} else if(assistant.score==3){
								assistantScore= '★★★✩✩';
							} else if(assistant.score==2){
								assistantScore= '★★✩✩✩';
							} else if(assistant.score==1){
								assistantScore= '★✩✩✩✩';
							}
							return (
								<div key={assistant.personal.id}>
									<SmallCard name={assistant.personal.name} photo={assistant.personal.avatar} fromPrice={assistant.price.range.from} toPrice={assistant.price.range.to}
										score={assistantScore} />
								</div>
							);
						})}
				</Flex>
			</Flex>
		);
	}
}

export default SmallCardsComponent;
