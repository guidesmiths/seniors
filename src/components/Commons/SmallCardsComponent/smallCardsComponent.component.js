import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import SmallCard from '../SmallCard/smallCard.component';
import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';
import data from '../CardList/mock-data.json';
import {IconButton} from '../../Styles/IconButton';

class SmallCardsComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			sortByStar: false
		};
		this.updateSort = this.updateSort.bind(this);
	}

	orderForScores(){
		return [...data].sort(function(a, b){return b.score-a.score;});
	}

	updateSort(){
		this.setState({ sortByStar: !this.state.sortByStar });
	}

	renderScore(score) {
		const maxStars = 5;
		const fillStarChars = "★".repeat(score);
		const emptyStarChars = "✩".repeat(maxStars - score);
		return fillStarChars + emptyStarChars;
	}

	render(){
		let itemList = this.state.sortByStar ? this.orderForScores() : data;

		return(
			<Flex boxWidth={'70%'} directionLg={'column'} marginTop={'50px'}>
				<Flex boxWidth={'100%'} backgroundFlex={'red'} justify={'flex-start'} flexWrap={'wrap'}>
					<IconButton onClick={this.updateSort}>★</IconButton>
				</Flex>
				<Flex boxWidth={'100%'} backgroundFlex={'red'} justify={'flex-start'} flexWrap={'wrap'}>

					{itemList.map((assistant)=>{
						return (
							<SmallCard
								key={assistant.id}
								name={assistant.personal.name}
								photo={assistant.personal.avatar} fromPrice={assistant.price.range.from} toPrice={assistant.price.range.to}
								age={assistant.personal.age + ' años'}
								skills={assistant.skills.duties}
								languages={assistant.skills.languages}
								score={this.renderScore(assistant.score)} />
						);
					})}
				</Flex>
			</Flex>
		);
	}
}

export default SmallCardsComponent;

// {data.sort(function(a, b){return b.score-a.score;})
//   .map((assistant, index)=>{
//     let assistantScore;
//     if(assistant.score==5){
//       assistantScore= "★★★★★";
//     } else if(assistant.score==4){
//       assistantScore= '★★★★✩';
//     } else if(assistant.score==3){
//       assistantScore= '★★★✩✩';
//     } else if(assistant.score==2){
//       assistantScore= '★★✩✩✩';
//     } else if(assistant.score==1){
//       assistantScore= '★✩✩✩✩';
//     }
//     return (
//       <div key={assistant.personal.id}>
//         <SmallCard name={assistant.personal.name} photo={assistant.personal.avatar} fromPrice={assistant.price.range.from} toPrice={assistant.price.range.to}
//           age={assistant.personal.age + ' años'}
//           skills={assistant.skills.duties}
//           languages={assistant.skills.languages}
//           score={assistantScore} />
//       </div>
//     );
//   })}
