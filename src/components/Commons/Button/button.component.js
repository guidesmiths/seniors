import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const Button1 = styled.button`
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

export const Button2 = Button1.extend`
border: 2px solid #e81e7c;
@media (min-width: 768px) {
  margin-left: auto;
  margin-right: auto;
 }
`;
