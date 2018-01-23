import React from "react";
import PropTypes from "prop-types";
import "./cardList.css";
import Card from "../Card/card.container";


export default class CardList extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div>
				{this.props.data.map((assistant) => <Card key={new Date().getTime()} {...assistant}/>)}
			</div>
		);
	}

}

CardList.propTypes = {
	name: PropTypes.string
};