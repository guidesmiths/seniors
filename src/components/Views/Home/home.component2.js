import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
width: 100%;
background: #B0E0E6;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const MediumContainer = styled.div`
background: #B0E0E6;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;
width: 90%;
@media (min-width: 500px) {
    flex-direction: row;
  }
`;

const SmallContainer = styled.div`
width: 100%;
background: #B0E0E6;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const ItemIcon = styled.div`
background: #B0E0E6;
width: 20%;
`;

const ItemReason = styled.div`
background: #B0E0E6;
width: 80%;
text-align: center;
padding: 10px;
`;

const ReasonTextRight= styled.p`
font-family: 'Open Sans', sans-serif;
font-size: 12px;
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
font-size: 12px;
letter-spacing: -0.1px;
color: #031416;
text-align: left;
`;

const ReasonTextLeftBold = ReasonTextLeft.extend`
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
cursor: pointer;
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

export {MainContainer};
export {MediumContainer};
export {SmallContainer};
export {ItemIcon};
export {ItemReason};
export {ButtonHome};
export {ReasonTextRight};
export {ReasonTextLeft};
export {ReasonTextRightBold};
export {ReasonTextLeftBold};
export {HomeFooter};
