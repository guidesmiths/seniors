import { Badge } from "reactstrap";
import React from "react";
import PropTypes from "prop-types";
import "./card.css";


export default class Card extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className="col-md-8 cardItem flex">
				<div className="flex flex-1 flex-column">
					<div className="flex flex-row">

						<div className="flex flex-column flex-align-center extra-margin-right-xl" style={{position: 'relative'}}>
							<div className="PresenceProfilePic" style={{position: 'relative'}}>
								<img src={this.props.personal.avatar} className="ProfilePic notranslate verb-profile-pic img-responsive img-responsive" alt={this.props.personal.name} style={{opacity: '1'}}>
								</img>
							</div>
							<div className="flex flex-column flex-align-center  mobile-hide" style={{padding: '5px 0px',minWidth: '150px'}}>
								<div style={{fontSize: '16px', color: 'rgb(66, 200, 138)', letterSpacing: '1.1px'}}>
									<span className="notranslate">{this.props.price.range.from}-{this.props.price.range.to}{this.props.price.currency}/h</span>
								</div>
							</div>
						</div>

						<div className="flex flex-1 flex-column" style={{minWidth: '0px'}}>
							<div className="flex flex-row mobile-flex-column flex-justify-content-space-between extra-marginBottom-xl">
								<div className="flex flex-1 flex-wrap flex-row mobile-flex-column flex-align-center">
									<div className="flex flex-align-center">
										<h2 className="no-margin extra-margin-right-md notranslate" style={{marginBottom: '0px'}}>
											{this.props.personal.name}
										</h2>
										<img src={this.props.personal.country.flag} className="Flag extra-margin-right-sm" width="20" height="20" style={{maxWidth: 'none'}}>
										</img>

									</div>

									<div className="StarRatings flex flex-row flex-align-center mobile-extra-margin-top-md">
										<div className="flex num-ratings" aria-label="70 valoraciones" aria-label-notranslate="true">
											<span className="notranslate">{this.props.personal.age}</span>
										</div>
									</div>
								</div>

								<div className="flex flex-row flex-align-center mobile-hide">
									<button type="button" className="btn btn-sm btn-success" style={{zIndex: '6'}}>
										<i className="fa fa-bolt"></i>
										<span className="isolate">Conóceme</span>
									</button>
								</div>
							</div>

							<div className="mobile-hide">
								<div className="flex mobile-flex-column flex-row">
									{this.props.skills.duties.map((duty) => <Badge color="primary" key={new Date().getTime()}>{duty}</Badge>)}
								</div>

								<div className="flex mobile-flex-column flex-row">
									{this.props.skills.languages.map((lang) => <Badge color="secondary" key={new Date().getTime()}>{lang}</Badge>)}
								</div>

								<div className="flex flex-row mobile-flex-column flex-align-center mobile-flex-align-start">
									<span className="ProfLanguageList flex flex-align-center" style={{flexWrap: 'wrap'}}>
										<span className="ProfLanguage notranslate flex flex-row flex-align-center" style={{marginRight: '5px'}}>
											<div style={{marginRight: '5px'}}>Puntuación:</div>
											<div className="flex flex-row flex-align-center" aria-label="(B2) Upper Intermediate" role="img">
												{[...new Array(5)].map((_, i) =>
													<div key={new Date().getTime()} style={{color: (i + 1) <= this.props.score ? 'rgb(254, 221, 167)' : 'rgb(216, 216, 216)', fontSize: '40px'}}>•</div>
												)}
											</div>
										</span>

									</span>

								</div>

								<div className="card-description" style={{minWidth: '0px'}}>
									<div className="flex notranslate" style={{minWidth: '0px'}}>
										{this.props.personal.description}
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>
			</div>
		);
	}

}

Card.defaultProps = {
	id: 0,
	personal: {
		avatar: "http://www.artofhustle.com/wp-content/uploads/featured/default-avatar_150x150.jpg",
		name: "Unkown",
		age: 40,
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
		et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		country: {
			flag: "https://cdn.jsdelivr.net/emojione/assets/png/1f1ec-1f1e7.png?v=2.2.7",
			name: "España"
		}
	},
	skills: {
		languages: [ 'Español', 'Inglés' ],
		duties: [ 'Lavar', 'Planchar', 'Cocinar' ]
	},
	score: 4,
	price: {
		range: {
			from: 10,
			to: 15
		},
		currency: "€"
	}
};

Card.propTypes = {
	name: PropTypes.string
};