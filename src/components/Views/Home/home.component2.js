import React, { Component } from 'react';
import styled from 'styled-components';

const TitleHome = styled.h1`
color: blue;
font-size: 100px;
`;

const Hero = styled.div`
height: 80vh;
background: pink;
`;

const MainContent = styled.div`
width: 100%;
background: #24b8ca;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const MediumContent = styled.div`
background: #24b8ca;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%
`;

const SmallContent = styled.div`
width: 100%;
background: #24b8ca;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const Item30 = styled.div`
background: #24b8ca;
width: 20%;
`;

const Item70 = styled.div`
background: #24b8ca;
width: 80%;
text-align: center;
padding: 10px;
`;

const SentencesTextRight= styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 12px;
letter-spacing: -0.1px;
color: #031416;
text-align: right;
`;

const SentencesTextRightBold = SentencesTextRight.extend`
font-weight: bold;
margin-bottom: 4px;
`;

const SentencesTextLeft= styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 12px;
letter-spacing: -0.1px;
color: #031416;
text-align: left;
`;

const SentencesTextLeftBold = SentencesTextLeft.extend`
font-weight: bold;
margin-bottom: 4px;
`;

const ButtonHome = styled.button`
background: #e81e7c;
border: 2px solid #e81e7c;
width: 128px;
height: 32px;
text-weight: bold;
color: #fff;
margin-left: auto;
margin-right: auto;
margin-bottom: 30px;
`;

const HomeFooter = styled.div`
background: #031416;
width: 100%;
height: 92px;
text-weight: 600;
font-size: 12px;
letter-spacing: -0.1px;
color: #fff;
text-align: center;
line-height: 92px;
`;

export {TitleHome};
export {Hero};
export {MainContent};
export {MediumContent};
export {SmallContent};
export {Item30};
export {Item70};
export {ButtonHome};
export {SentencesTextRight};
export {SentencesTextLeft};
export {SentencesTextRightBold};
export {SentencesTextLeftBold};
export {HomeFooter};
