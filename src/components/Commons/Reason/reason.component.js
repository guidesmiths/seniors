import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Icon = styled.img`
  width: 48px;
  margin-left: 8px;
  margin-right: 8px;
  @media (min-width: 1024px) {
   width: 92px;
  }
`;
const ReasonText = styled.p`
  color: black;
  font-size: 12px;
  margin: 0;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const ReasonTitle = styled.h2`
  color: black;
  font-weight: 700;
  font-size: 12px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const WrapItem = styled.div`
  display: flex;
  flex-direction: ${props => props.orientation ? 'row-reverse' : 'row'};
  text-align: ${props => props.orientation ? 'right' : 'left'};
  width: 85%;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
   width: 50%;
   margin-top: 18px;
   margin-bottom: 18px;
  }
  @media (min-width: 1024px) {
   margin-top: 36px;
   margin-bottom: 36px;
  }
`;

export default class Reason extends React.Component {
	render(){
		return(
			<WrapItem orientation={this.props.orientation}>
				<Icon src={this.props.src} />
				<div>
					<ReasonTitle>Lorem ipsum</ReasonTitle>
					<ReasonText>Donec cursus elit et sem tristique, non mattis erat faucibus. Vivamus in congue enim.</ReasonText>
				</div>
			</WrapItem>
		);
	}
}
