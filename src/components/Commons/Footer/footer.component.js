import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

export const FooterStyle = styled.div`
background: #031416;
width: 100%;
height: 92px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-weight: 600;
font-size: 12px;
letter-spacing: -0.1px;
color: #fff;
`;

export default class Footer extends React.Component {
	render(){
		return(
			<FooterStyle>
				<p>
          Política de cookies
				</p>
				<p>
          Seniors &copy; 2018
				</p>
			</FooterStyle>
		);
	}
}
