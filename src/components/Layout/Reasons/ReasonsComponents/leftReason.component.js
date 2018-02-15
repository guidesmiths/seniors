import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const colors = {
	primary: '#24b8ca',
	secondary: '#B0E0E6'
};

const LeftReasonContainer = styled.div`
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

export default class LeftReason extends React.Component {
	render(){
		return(
			<LeftReasonContainer>
				<ItemIcon>
					<img src={this.props.iconImage} />
				</ItemIcon>
				<ItemReason>
					<ReasonTextLeftBold>
                          Lorem ipsum
					</ReasonTextLeftBold>
					<ReasonTextLeft>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					</ReasonTextLeft>
				</ItemReason>
			</LeftReasonContainer>
		);
	}
}

LeftReason.PropTypes = {
	iconImage: PropTypes.array.isRequired
};
