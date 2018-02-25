import React from "react";
import styled from 'styled-components';

const VideoWrapper = styled.div `
	position: relative;
	padding-bottom: 56.25%;
	height: 0;
`;

export default class Video extends React.Component {
	render(){
		return(
			<VideoWrapper>
				<iframe frameBorder="0" style={{ overflow: 'hidden', height: '100%', width: '100%', position: 'absolute' }} src="https://www.youtube.com/embed/tgbNymZ7vqY"/>
			</VideoWrapper>
		);
	}
}
