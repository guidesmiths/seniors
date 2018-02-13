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
`;

const Hero = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
text-align: center;
background-image: url(${hero});
background-size: cover;
background-position: center;
height: 100vh;
padding-bottom: 10%;
padding-right: 40px;
padding-left: 40px;
`;

const Title = styled.h1 `
font-size: 60px;
`;

const InputContainer = styled.div `
background-color: white;
padding: 48px;
text-align: center;
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
