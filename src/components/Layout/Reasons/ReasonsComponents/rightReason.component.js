import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const colors = {
	primary: '#24b8ca',
	secondary: '#B0E0E6'
};

const RightReasonContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: 1px solid green;
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
font-family: 'Open Sans', sans-serif;
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

export default class RightReason extends React.Component {
	render(){
		return(
			<RightReasonContainer>
				<ItemReason>
					<ReasonTextRightBold>
                          Lorem ipsum
					</ReasonTextRightBold>
					<ReasonTextRight>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</ReasonTextRight>
				</ItemReason>
				<ItemIcon>
					<img src={this.props.iconImage} />
				</ItemIcon>
			</RightReasonContainer>
		);
	}
}

RightReason.PropTypes = {
	iconImage: PropTypes.array.isRequired
};
