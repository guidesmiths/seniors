import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Paragraph = styled.p`
font-family: 'Open Sans', sans-serif;
letter-spacing: -0.1px;
color: #031416;
text-align: left;
font-size: 12px;
text-align: ${props => props.orientation || 'right'};
font-weight: ${props => props.weight || 'normal'};
margin-bottom: ${props => props.marginBottom || '0px'};

@media (min-width: 768px) {
  font-size: ${props => props.sizeLg || '16px'};
}
`;
