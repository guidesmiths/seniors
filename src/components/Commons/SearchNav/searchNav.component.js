import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import ListIcon from '../../../img/list-icon.png';
import Grid from '../../../img/grid.png';
import {Flex} from '../../Styles/Flex';



export default class SearchNav extends React.Component {
	render(){
		return(
			<Flex justify= {'flex-end'} width= {'90%'} >
				<img src={ListIcon} alt="ListIcon" onClick={this.props.listClickChangeComponent} width="40px" height="40px"/>
				<img src={Grid} alt="GridIcon" onClick={this.props.listClickChangeBack} width="40px" height="40px"/>
			</Flex>
		);
	}
}
