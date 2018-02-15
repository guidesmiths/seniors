import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';
import LeftReason from './ReasonsComponents/leftReason.component';
import RightReason from './ReasonsComponents/rightReason.component';
import {Button2} from '../../Commons/Button/button.component';

const colors = {
	primary: '#24b8ca',
	secondary: '#B0E0E6'
};

const ReasonsContainer = styled.div`
width: 100%;
padding-bottom: 30px;
@media (min-width: 768px) {
   padding-top: 100px;
 }
`;

const MainReasonsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-width: 768px) {
   flex-direction: row;
 }
`;

const PairReasonsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%;
`;


export default class Reasons extends React.Component {
	render(){
		return(
			<ReasonsContainer>
				<MainReasonsContainer>
					<PairReasonsContainer>
						<LeftReason iconImage={IconA} />
						<RightReason iconImage={IconB} />
					</PairReasonsContainer>
					<PairReasonsContainer>
						<LeftReason iconImage={IconC} />
						<RightReason iconImage={IconD} />
					</PairReasonsContainer>
				</MainReasonsContainer>
				<Button2>Más</Button2>
			</ReasonsContainer>
		);
	}
}
