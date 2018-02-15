import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';
import LeftReason from './ReasonsComponents/leftReason.component';
import RightReason from './ReasonsComponents/rightReason.component';

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

const Button1 = styled.button`
background: #e81e7c;
border: 2px solid #e81e7c;
width: 128px;
height: 32px;
font-weight: bold;
color: #fff;
margin-left: auto;
margin-right: auto;
cursor: pointer;
display: block;
&:hover {
		 color: #e81e7c;
		 background: #fff;
	 }
@media (min-width: 768px) {
   font-size: 16px;
   margin:0;
 }
`;

const Button2 = Button1.extend`
border: 2px solid #e81e7c;
@media (min-width: 768px) {
  margin-left: auto;
  margin-right: auto;
 }
`;

export default class Reasons extends React.Component {
	render(){
		return(
			<ReasonsContainer>
				<MainReasonsContainer>
					<PairReasonsContainer>
						<LeftReason iconImage={IconA} leftReasonTitle='Lorem ipsum' leftReasonText='Lorem ipsum' />
						<RightReason iconImage={IconB} rightReasonTitle='Lorem ipsum' rightReasonText='Lorem ipsum' />
					</PairReasonsContainer>
					<PairReasonsContainer>
						<LeftReason iconImage={IconC} leftReasonTitle='Lorem ipsum' leftReasonText='Lorem ipsum' />
						<RightReason iconImage={IconD} rightReasonTitle='Lorem ipsum' rightReasonText='Lorem ipsum' />
					</PairReasonsContainer>
				</MainReasonsContainer>
				<Button2>Más</Button2>
			</ReasonsContainer>
		);
	}
}
