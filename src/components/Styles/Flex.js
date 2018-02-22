import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
flex-direction: ${props => props.direction || 'column'};
align-items: ${props => props.align || 'center'};
justify-content: ${props => props.justify || 'center'};
width: ${props => props.boxWidth || '100%'};
padding-bottom: ${props => props.paddingBottom || '0px'};
padding-top: ${props => props.paddingTop || '0px'};
margin: ${props => props.marginBox || '0px'};
margin-top: ${props => props.marginTop || '0px'};
background: ${props => props.backgroundFlex || '#fff'};
height: ${props => props.boxHeight || 'auto'};
border: ${props => props.boxBorder || 'none'};
flex-wrap: ${props => props.flexWrap || 'nowrap'};

@media (min-width: 768px) {
  flex-direction: ${props => props.directionLg || 'row'};
  padding-top: ${props => props.paddingTopLg || '0px'};
}
`;
