import React from "react";
import styled from 'styled-components';
import ListIcon from '../../../img/list-icon.png';
import Grid from '../../../img/grid.png';


const NavStyle = styled.nav `

	display:none;
	@media (min-width: 1024px) {
    display:block;
    padding-right:5%;
    ul {
    display: flex;
    flex-direction:row;
    list-style: none;
	}
}
`;


export default class SearchNav extends React.Component {
	render(){
		return(

			<NavStyle>
				<ul>
					<li><img src={ListIcon} alt="ListIcon" onClick={this.props.listClickChangeComponent} width="40px" height="40px"/></li>
					<li><img src={Grid} alt="GridIcon" onClick={this.props.listClickChangeBack} width="40px" height="40px"/></li>
				</ul>
			</NavStyle>

		);
	}
}
