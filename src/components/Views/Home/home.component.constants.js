import React, { Component } from 'react';
import styled from 'styled-components';
import hero from '../../../img/hero.jpg';

const colors = {
	primary: '#24b8ca',
	secondary: '#B0E0E6'
};

export const Header = styled.div`
padding: 12px 16px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: transparent;
`;

export const MenuItem = styled.li `
text-decoration: none;
color: white;
font-weight:bold;
font-size:12px;
letter-spacing:-0.1px;
@media (min-width: 500px) {
  font-size: 16px;
    }
`;

export const Hero = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
text-align: center;
background-image: url(${hero});
background-size: cover;
background-position: center;
height: 80vh;
padding-bottom: 10%;
padding-right: 40px;
padding-left: 40px;
`;

export const Title = styled.h1 `
font-size: 36px;
font-weight:bold;
letter-spacing:-0.4px;
@media (min-width: 500px) {
  font-size: 72px;
    }
`;

export const InputContainer = styled.div `
display: flex;
flex-direction: column;
background-color: white;
padding: 36px 64px 0;
text-align: center;
@media (min-width: 500px) {
    z-index: 10;
    width:80vw;
    flex-direction: row;
    padding: 46px 52px 0;
    margin-left: auto;
    margin-right:auto;
    margin-top:-60px;
    box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.36);
    }

`;

export const Input = styled.input `
margin-bottom:12px;
border: 1px solid ${colors.primary};
padding-top: 8px;
`;

export const Select = styled.select `
background-color: white;
margin-bottom:12px;
margin-right:12px;
border: 1px solid ${colors.primary};
padding-left: 15px;
padding-top: 4px;
padding-bottom: 4px;
`;

export const ReasonsContainer = styled.div`
width: 100%;
background: #B0E0E6;
padding-bottom: 30px;
`;

export const MainContainer = styled.div`
width: 100%;
background: #B0E0E6;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (min-width: 500px) {
   flex-direction: row;
 }
`;

export const MediumContainer = styled.div`
background: #B0E0E6;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%;
`;

export const SmallContainer = styled.div`
width: 80%;
background: #B0E0E6;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const ItemIcon = styled.div`
background: #B0E0E6;
width: 20%;
@media (min-width: 500px) {
   width: 15%;
 }
`;

export const ItemReason = styled.div`
background: #B0E0E6;
width: 80%;
text-align: center;
padding: 10px;
`;

export const ReasonTextRight= styled.p`
letter-spacing: -0.1px;
color: #031416;
text-align: right;
`;

export const ReasonTextRightBold = ReasonTextRight.extend`
font-weight: bold;
margin-bottom: 4px;
`;

export const ReasonTextLeft= styled.p`
font-family: 'Open Sans', sans-serif;
letter-spacing: -0.1px;
color: #031416;
text-align: left;
`;

export const ReasonTextLeftBold = ReasonTextLeft.extend`
font-weight: bold;
margin-bottom: 4px;
`;
export const Button1 = styled.button`
background: #e81e7c;
border: 2px solid #e81e7c;
width: 128px;
height: 32px;
text-weight: bold;
color: #fff;
margin-left: auto;
margin-right: auto;
cursor: pointer;
display: block;
@media (min-width: 500px) {
   font-size: 16px;
   margin:0;
 }
`;

export const Button2 = Button1.extend`
@media (min-width: 500px) {
  margin-left: auto;
  margin-right: auto;
 }
`;

export const HomeFooter = styled.div`
background: #031416;
width: 100%;
height: 92px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const HomeFooterItem1 = styled.div`
text-weight: 600;
font-size: 12px;
letter-spacing: -0.1px;
color: #fff;
`;

export const HomeFooterItem2 = styled.div`
text-weight: 600;
font-size: 10px;
letter-spacing: -0.1px;
color: #fff;
`;
