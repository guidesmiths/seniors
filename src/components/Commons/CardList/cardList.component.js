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
		console.log(this.props);
		return(
			<div>	
				{this.props.assistants.map((as, i)=><Card key={as.id} assistant={as} />)}
			</div>
		);
	}

}

CardList.propTypes = {
	name: PropTypes.string
};
