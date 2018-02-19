import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Paragraph = styled.p`
letter-spacing: -0.1px;
color: #031416;
text-align: ${props => props.orientation || 'right'};
font-weight: ${props => props.weight || 'normal'};
margin-bottom: ${props => props.marginBottom || '0px'};

@media (min-width: 768px) {
  font-size: ${props => props.sizeLg || '16px'};
}
`;
