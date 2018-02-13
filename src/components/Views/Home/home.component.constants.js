import React, { Component } from 'react';
import styled from 'styled-components';
import hero from '../../../img/hero.jpg';



const Header = styled.div`
padding: 12px 16px;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
background-color: transparent;
`;

const MenuItem = styled.li `
text-decoration: none;
color: white;
font-weight:bold;
font-size:12px;
letter-spacing:-0.1px;
`;

const Hero = styled.div`
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

const Title = styled.h1 `
font-size: 36px;
font-weight:bold;
letter-spacing:-0.4px;
`;

const InputContainer = styled.div `
background-color: white;
padding: 36px 48px 0;
text-align: center;
padding-bottom: 40px;
`;

const Input = styled.input `
margin-bottom:12px;
border: 1px solid #24b8ca;
padding-top: 8px;
padding-right: 8px;
`;

const ReasonsContainer = styled.div`
width: 100%;
background: #B0E0E6;
padding-bottom: 30px;
`;

const MainContainer = styled.div`
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

const MediumContainer = styled.div`
background: #B0E0E6;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%;
`;

const SmallContainer = styled.div`
width: 80%;
background: #B0E0E6;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const ItemIcon = styled.div`
background: #B0E0E6;
width: 20%;
@media (min-width: 500px) {
    width: 15%;
  }
`;

const ItemReason = styled.div`
background: #B0E0E6;
width: 80%;
text-align: center;
padding: 10px;
`;

const ReasonTextRight= styled.p`
letter-spacing: -0.1px;
color: #031416;
text-align: right;
`;

const ReasonTextRightBold = ReasonTextRight.extend`
font-weight: bold;
margin-bottom: 4px;
`;

const ReasonTextLeft= styled.p`
font-family: 'Open Sans', sans-serif;
letter-spacing: -0.1px;
color: #031416;
text-align: left;
`;

const ReasonTextLeftBold = ReasonTextLeft.extend`
font-weight: bold;
margin-bottom: 4px;
`;

const Button = styled.button`
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
  }
`;

const HomeFooter = styled.div`
background: #031416;
width: 100%;
height: 92px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const HomeFooterItem1 = styled.div`
text-weight: 600;
font-size: 12px;
letter-spacing: -0.1px;
color: #fff;
`;

const HomeFooterItem2 = styled.div`
text-weight: 600;
font-size: 10px;
letter-spacing: -0.1px;
color: #fff;
`;



export {ReasonsContainer};
export {MainContainer};
export {MediumContainer};
export {SmallContainer};
export {ItemIcon};
export {ItemReason};
export {Button};
export {ReasonTextRight};
export {ReasonTextLeft};
export {ReasonTextRightBold};
export {ReasonTextLeftBold};
export {HomeFooter};
export {HomeFooterItem1};
export {HomeFooterItem2};
export {Hero};
export {Header};
export {Title};
export {MenuItem};
export {Input};
export {InputContainer};
