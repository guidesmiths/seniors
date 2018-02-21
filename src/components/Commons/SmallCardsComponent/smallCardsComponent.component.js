import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import SmallCard from '../SmallCard/smallCard.component';
import {Flex} from '../../Styles/Flex';
import {colors} from '../../Styles/Variables';


class SmallCardsComponent extends React.Component {
	render(){
		return(
			<Flex boxWidth={'70%'}  >
				<Flex boxWidth={'100%'} backgroundFlex={'red'} justify={'flex-start'} flexWrap={'wrap'}>
					<SmallCard />
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
