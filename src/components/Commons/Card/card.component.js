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
							<strong className="teacher-featured">Destacado</strong>
							<div className="PresenceProfilePic" style={{position: 'relative'}}>
								<img src="https://d2tz4rphepbk36.cloudfront.net/verbling-profiles/48168614395548803042_150x150_cropped.png" className="ProfilePic notranslate verb-profile-pic img-responsive img-responsive" alt="English Tutor Charlotte" style={{opacity: '1'}}>
								</img>
							</div>
							<div className="flex flex-column flex-align-center  mobile-hide" style={{padding: '5px 0px',minWidth: '150px'}}>
								<div style={{fontSize: '16px', color: 'rgb(66, 200, 138)', letterSpacing: '1.1px'}}>
									<span className="notranslate">17.96-21.23 €</span>
								</div>
								<span>
									<var data-var="currency">EUR</var>
									<span aria-label="per hour">/h</span>
								</span>
							</div>
						</div>

						<div className="flex flex-1 flex-column" style={{minWidth: '0px'}}>
							<div className="flex flex-row mobile-flex-column flex-justify-content-space-between extra-marginBottom-xl">
								<div className="flex flex-1 flex-wrap flex-row mobile-flex-column flex-align-center">
									<div className="flex flex-align-center">
										<h2 className="no-margin extra-margin-right-md notranslate" style={{marginBottom: '0px'}}>
											Charlotte
										</h2>
							
										<img src="https://cdn.jsdelivr.net/emojione/assets/png/1f1ec-1f1e7.png?v=2.2.7" className="Flag extra-margin-right-sm" width="20" height="20" style={{maxWidth: 'none'}}>
										</img>

									</div>

									<div className="StarRatings flex flex-row flex-align-center mobile-extra-margin-top-md">
										<div className="flex" aria-label="5,0 out of 5 stars" aria-label-notranslate="true" role="img">
											<div className="flex fa gold fa-star"></div>
											<div className="flex fa gold fa-star"></div>
											<div className="flex fa gold fa-star"></div>
											<div className="flex fa gold fa-star"></div>
										</div>
										<div className="flex num-ratings" aria-label="70 valoraciones" aria-label-notranslate="true">
											<span className="notranslate">70</span>
										</div>
									</div>
								</div>

								<div className="flex flex-row flex-align-center mobile-hide">
									<div className="extra-padding-right-md">
										<div>
											<div className="mobile-hide" style={{cursor: 'pointer'}}>
												<i className="fa fa-heart-o fa-2x text-muted"></i>
											</div>
										</div>
									</div>

									<div className="extra-padding-right-md">
										<button type="button" className="btn btn-sm btn-default btn-outline btn btn-default" style={{zIndex: '6', fontSize: '18px', padding: '0px 7px'}}>
											<i name="thin-envelope" aria-label="Message" className="vi vi-thin-envelope"></i>
										</button>
									</div>
							
									<button type="button" className="btn btn-sm btn-success" style={{zIndex: '6'}}>
										<i className="fa fa-bolt"></i>
										<span className="isolate">Prueba gratuita</span>
									</button>
								</div>
							</div>

							<div className="mobile-hide">
								<div className="flex mobile-flex-column flex-justify-content-space-between flex-row">
									
									<div className="flex flex-1 flex-row ProfileItemBase--InnerBlock flex-align-center desktop-extra-margin-right-md">
										<i className="vi vi-thin-graduation-hat extra-margin-right-sm" name="thin-graduation-hat" style={{fontSize: '25px'}}></i>
										<div className="flex flex-column ProfileBase--truncate">
											<label className="extra-margin-right-sm">Enseña</label>
											<div>
												<img src="https://cdn.jsdelivr.net/emojione/assets/png/1f1fa-1f1f8.png?v=2.2.7" width="12px" height="12px" className="Flag" style={{maxWidth: 'none'}}></img>
												<span>Inglés</span>
											</div>
										</div>
									</div>

									<div className="flex flex-1 flex-row ProfileItemBase--InnerBlock flex-align-center desktop-extra-margin-right-md">
										<i className="vi vi-thin-world extra-margin-right-sm" name="thin-world" style={{fontSize: '25px'}}></i>
										<div className="flex flex-column ProfileBase--truncate">
											<label className="extra-margin-right-sm">De</label>
											<div>
												<span>Reino Unido</span>
											</div>
										</div>
									</div>
							
									<div className="flex flex-1 flex-row ProfileItemBase--InnerBlock flex-align-center">
										<i className="vi vi-thin-stop-watch extra-margin-right-sm" name="thin-stop-watch" style={{fontSize: '25px'}}></i>
										<div className="flex flex-column ProfileBase--truncate">
											<label>Clases</label>
											<div>
												<span>91</span>
											</div>
										</div>
									</div>

								</div>

								<div className="flex flex-row mobile-flex-column flex-align-center mobile-flex-align-start">
									<span className="ProfLanguageList flex flex-align-center" style={{flexWrap: 'wrap'}}>
									
										<span className="ProfLanguage notranslate flex flex-row flex-align-center" style={{marginRight: '5px'}}>
											<div style={{marginRight: '5px'}}>Español</div>
											<div className="flex flex-row flex-align-center" aria-label="(B2) Upper Intermediate" role="img">
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(216, 216, 216)', fontSize: '18px'}}>•</div>
											</div>
										</span>

										<span className="ProfLanguage notranslate flex flex-row flex-align-center" style={{marginRight: '5px'}}>
											<div style={{marginRight: '5px'}}>Español</div>
											<div className="flex flex-row flex-align-center" aria-label="(B2) Upper Intermediate" role="img">
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(216, 216, 216)', fontSize: '18px'}}>•</div>
											</div>
										</span>

										<span className="ProfLanguage notranslate flex flex-row flex-align-center" style={{marginRight: '5px'}}>
											<div style={{marginRight: '5px'}}>Español</div>
											<div className="flex flex-row flex-align-center" aria-label="(B2) Upper Intermediate" role="img">
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(216, 216, 216)', fontSize: '18px'}}>•</div>
											</div>
										</span>

										<span className="ProfLanguage notranslate flex flex-row flex-align-center" style={{marginRight: '5px'}}>
											<div style={{marginRight: '5px'}}>Español</div>
											<div className="flex flex-row flex-align-center" aria-label="(B2) Upper Intermediate" role="img">
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(216, 216, 216)', fontSize: '18px'}}>•</div>
											</div>
										</span>


										<span className="ProfLanguage notranslate flex flex-row flex-align-center" style={{marginRight: '5px'}}>
											<div style={{marginRight: '5px'}}>Español</div>
											<div className="flex flex-row flex-align-center" aria-label="(B2) Upper Intermediate" role="img">
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(254, 221, 167)', fontSize: '18px'}}>•</div>
												<div style={{color: 'rgb(216, 216, 216)', fontSize: '18px'}}>•</div>
											</div>
										</span>

									</span>

								</div>
								<div className="card-description" style={{minWidth: '0px'}}>
									<div className="flex notranslate" style={{minWidth: '0px'}}>
							My name is Charlotte and I was born in London, in the UK. My degree is in Peace Studies and International Relations and I haveve been teaching the English language for over 3 years now. Read on for some important notes about learning with me!

1. Firstly, if you are interested in learning with me, *please book a free 30-minute trial className* so we can get to know each other.
2. Secondly, I want to know your language goals and interests so feel free to send me a message telling me about you, and why you are learning English. 
3. I respond quicker to students who READ my profile. Show me you checked out my profile: 
**in your message, tell me what your favourite colour is! **So you can say my name is.....and my favourite colour is...... (green / red / blue / purple....)
4. If you book a className with me, thank you! I will send you a message with some questions about you and what you want from the className. 
***IF you do not answer the questions by 6 hours before the start of the className I will cancel the className and ask you to reschedule it to a time when you can communicate with me more.

As you can see Im passionate about learning about different cultures and helping to make communication easier. I use a number of styles and I have many years of experience so you can expect high-quality classNamees from me. We can work together to help you to learn and improve exactly what you want to. :)

So whatever your reasons for learning English, I would like to find out about your passions and what you enjoy. My lessons are creative and engaging and take into account multiple intelligences, critical thinking, task-based learning and the environment as a teacher. I look forward to making communication easier with you! 

My interests include being in nature, music and dancing, festivals, circus skills (I also work as a professional circus and fire performer), travel, permaculture and regenerative ecology and I love exploring new things! 

Open-mindedness is very important to me. Ive lived in some very diverse situations, from off-grid mountain communities to city squats, in small villages next to the sea and in the wild desert, and right now I live in a Forest Buddhism boarding school in central Thailand. For me, life is about enjoyment and adventure and Id love to share this with you. :)   

Id love to get to know you before we start a course of lessons, so if youre interested in learning English with me please *book a trial className first* so that we can meet and talk about what you want from your lessons!
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

Card.propTypes = {
	name: PropTypes.string
};