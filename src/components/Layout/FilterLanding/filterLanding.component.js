import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import  {Flex} from '../../Styles/Flex';
import  {colors} from '../../Styles/Variables';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

const InputContainer = Flex.extend`
z-index: 1;
background-color: ${colors.light};
padding: 36px 64px;
transition: width 1s;
@media (min-width: 768px) {
    position:absolute;
    left: 0;
    right: 0;
    width:80vw;
    padding: 46px 52px 40px;
    margin-left: auto;
    margin-right:auto;
    margin-top:-60px;
    box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.36);
    }
`;

const Input = styled.input `
margin-bottom:12px;
margin-right:12px;
border: 1px solid ${colors.primary};
padding-left:14px;
height:36px;
width:192px;
@media (min-width: 768px) {
  width:256px;
  margin-bottom: 0;
 }
`;

const Select = styled.select `
background-color: ${colors.light};
margin-bottom:12px;
margin-right:12px;
padding-left:14px;
border: 1px solid ${colors.primary};
height:36px;;
width:192px;
@media (min-width: 768px) {
  margin-bottom: 0;
 }
`;

const Button1 = styled.button`
background: ${colors.secondary};
border: 2px solid ${colors.secondary};
width: 128px;
height: 32px;
font-weight: 700;
color: ${colors.light};
margin-left: auto;
margin-right: auto;
cursor: pointer;
display: block;
&:hover {
		 color: ${colors.secondary};
		 background: ${colors.light};
	 }
@media (min-width: 768px) {
   font-size: 16px;
   margin:0;
 }
`;

export default class FilterLanding extends React.Component {
	render(){
		return(
			<InputContainer >
				<Select>
					<option value="Direction">Filtrar por dirección</option>
					<option value="Price">Filtrar por precio</option>
					<option value="Score">Filtrar por valoración</option>
				</Select>
				<Input placeholder="C/ La piruleta 9, Madrid" /><Link to="/search">
					<Button1>Buscar</Button1></Link>
			</InputContainer>
		);
	}
}
