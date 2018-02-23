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

			<Flex  backgroundFlex={'red'} flexWrap={'wrap'} boxWidth= {'90%'} marginBox= {'10px auto 20px'} justify={'space-around'}>

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
									age={assistant.personal.age + ' años'}
									skills={assistant.skills.duties}
									languages={assistant.skills.languages}
									score={assistantScore} />
							</div>
						);
					})}
			</Flex>

		);
	}
}

export default SmallCardsComponent;
