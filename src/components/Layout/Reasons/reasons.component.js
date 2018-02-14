import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';


const colors = {
	primary: '#24b8ca',
	secondary: '#B0E0E6'
};

const ReasonsContainer = styled.div`
padding-top: 100px;
width: 100%;
padding-bottom: 30px;
`;

const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-width: 768px) {
   flex-direction: row;
 }
`;

const MediumContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%;
`;

const SmallContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const ItemIcon = styled.div`
width: 20%;
@media (min-width: 768px) {
   width: 15%;
 }
`;

const ItemReason = styled.div`
width: 80%;
text-align: center;
padding: 10px;
`;

const ReasonTextRight= styled.p`
letter-spacing: -0.1px;
color: #031416;
text-align: right;
font-size: 12px;
@media (min-width: 1000px) {
   font-size: 16px;
 }
`;

const ReasonTextRightBold = ReasonTextRight.extend`
font-weight: bold;
margin-bottom: 4px;
font-size: 12px;
@media (min-width: 1000px) {
   font-size: 16px;
 }
`;

const ReasonTextLeft= styled.p`
font-family: 'Open Sans', sans-serif;
letter-spacing: -0.1px;
color: #031416;
text-align: left;
font-size: 12px;
@media (min-width: 1000px) {
   font-size: 16px;
 }
`;

const ReasonTextLeftBold = ReasonTextLeft.extend`
font-weight: bold;
margin-bottom: 4px;
font-size: 12px;
@media (min-width: 1000px) {
   font-size: 16px;
 }
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
				<MainContainer>
					<MediumContainer>
						<SmallContainer>
							<ItemIcon>
								<img src={IconA} />
							</ItemIcon>
							<ItemReason>
								<ReasonTextLeftBold>
                           Lorem ipsum
								</ReasonTextLeftBold>
								<ReasonTextLeft>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextLeft>
							</ItemReason>
						</SmallContainer>
						<SmallContainer>
							<ItemReason>
								<ReasonTextRightBold>
                           Lorem ipsum
								</ReasonTextRightBold>
								<ReasonTextRight>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextRight>
							</ItemReason>
							<ItemIcon>
								<img src={IconB} />
							</ItemIcon>
						</SmallContainer>
					</MediumContainer>
					<MediumContainer>
						<SmallContainer>
							<ItemIcon>
								<img src={IconC} />
							</ItemIcon>
							<ItemReason>
								<ReasonTextLeftBold>
                           Lorem ipsum
								</ReasonTextLeftBold>
								<ReasonTextLeft>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextLeft>
							</ItemReason>
						</SmallContainer>
						<SmallContainer>
							<ItemReason>
								<ReasonTextRightBold>
                           Lorem ipsum
								</ReasonTextRightBold>
								<ReasonTextRight>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextRight>
							</ItemReason>
							<ItemIcon>
								<img src={IconD} />
							</ItemIcon>
						</SmallContainer>
					</MediumContainer>
				</MainContainer>
				<Button2>Más</Button2>
			</ReasonsContainer>
		);
	}
}
