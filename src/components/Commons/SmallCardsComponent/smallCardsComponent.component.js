import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import SmallCard from '../SmallCard/smallCard.component';
import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';
import data from '../CardList/mock-data.json';


class SmallCardsComponent extends React.Component {
	render(){
		return(
			<Flex boxWidth={'70%'}>
				<Flex boxWidth={'100%'} backgroundFlex={'red'} justify={'flex-start'} flexWrap={'wrap'}>

					{data.map((assistant, index)=>{
						return (
							<div key={assistant.personal.id}>
								<SmallCard name={assistant.personal.name} photo={assistant.personal.avatar} fromPrice={assistant.price.range.from} toPrice={assistant.price.range.to}
									score={assistant.score} />
							</div>
						);
					})}

					<SmallCard />
					<SmallCard />
					<SmallCard />
					<SmallCard />
					<SmallCard />
					<SmallCard />

				</Flex>
			</Flex>
		);
	}
}

export default SmallCardsComponent;

// <SmallCard />
// <SmallCard />
// <SmallCard />
// <SmallCard />
// <SmallCard />
// <SmallCard />
// <SmallCard />
