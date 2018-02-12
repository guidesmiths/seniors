import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import styled from 'styled-components';
import {TitleHome, Hero, MainContent, MediumContent, SmallContent, Item30, Item70, ButtonHome, SentencesTextRight, SentencesTextLeft, SentencesTextLeftBold, SentencesTextRightBold, HomeFooter} from './home.component2';
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';


export default class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div>
				<MainContent>
					<MediumContent>
						<SmallContent>
							<Item30>
								<img src={IconA} />
							</Item30>
							<Item70>
								<SentencesTextLeftBold>
								Lorem ipsum
								</SentencesTextLeftBold>
								<SentencesTextLeft>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</SentencesTextLeft>
							</Item70>
						</SmallContent>
						<SmallContent>
							<Item70>
								<SentencesTextRightBold>
								Lorem ipsum
								</SentencesTextRightBold>
								<SentencesTextRight>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</SentencesTextRight>
							</Item70>
							<Item30>
								<img src={IconB} />
							</Item30>
						</SmallContent>
					</MediumContent>
					<MediumContent>
						<SmallContent>
							<Item30>
								<img src={IconC} />
							</Item30>
							<Item70>
								<SentencesTextLeftBold>
								Lorem ipsum
								</SentencesTextLeftBold>
								<SentencesTextLeft>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</SentencesTextLeft>
							</Item70>
						</SmallContent>
						<SmallContent>
							<Item70>
								<SentencesTextRightBold>
								Lorem ipsum
								</SentencesTextRightBold>
								<SentencesTextRight>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</SentencesTextRight>
							</Item70>
							<Item30>
								<img src={IconD} />
							</Item30>
						</SmallContent>
					</MediumContent>
					<ButtonHome>Más</ButtonHome>
				</MainContent>
				<HomeFooter>
				Senior &copy; 2018 Politica de cookies
				</HomeFooter>
			</div>
		);
	}
}

Home.propTypes = {
};
