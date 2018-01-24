import React from "react";
import PropTypes from "prop-types";
import "./cardList.css";
import Card from "../Card/card.component";

export default class CardList extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div>
				<p>asdsa {this.props.assistants.length} </p>
				{
					this.props.assistants.map((as, i)=><Card key={as.id} assistant={as} />)
				}
				{	false &&
					this.props.assistants.length > 0 &&
					this.props.assistants.map((assistant) => 
						<Card id={'assistant'} key={'assistant' + new Date().getTime()} assistant={assistant} />
					)
				}
			</div>
		);
	}

}

CardList.propTypes = {
	name: PropTypes.string
};
