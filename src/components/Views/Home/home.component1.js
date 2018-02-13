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
height: 70%;
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
height: 30%;
`;

const Input = styled.input `
margin-bottom:12px;
border: 1px solid #24b8ca;
padding-top: 8px;
padding-right: 8px;
`;



export {Hero};
export {Header};
export {Title};
export {MenuItem};
export {Input};
export {InputContainer};
