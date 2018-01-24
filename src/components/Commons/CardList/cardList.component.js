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
		const assistants = this.props.assistants || [];
		return(
			<div>
				{
					assistants.length > 0 &&
					assistants.map((assistant) => 
						<Card key={new Date().getTime()} {...assistant}/>
					)
				}
			</div>
		);
	}

}

CardList.propTypes = {
	name: PropTypes.string
};
