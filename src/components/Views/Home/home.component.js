import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import styled from 'styled-components';
import {MainContainer, MediumContainer, SmallContainer, ItemIcon, ItemReason, ButtonHome, ReasonTextRight, ReasonTextLeft, ReasonTextLeftBold, ReasonTextRightBold, HomeFooter} from './home.component2';
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
				<MainContainer>
					<MediumContainer>
						<SmallContainer>
							<ItemIcon>
								<img src={IconA} />
							</ItemIcon>
							<ItemReason>
								<ReasonTextLeftBold>
								Lorem ipsum
								</ReasonTextLeftBold>
								<ReasonTextLeft>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextLeft>
							</ItemReason>
						</SmallContainer>
						<SmallContainer>
							<ItemReason>
								<ReasonTextRightBold>
								Lorem ipsum
								</ReasonTextRightBold>
								<ReasonTextRight>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextRight>
							</ItemReason>
							<ItemIcon>
								<img src={IconB} />
							</ItemIcon>
						</SmallContainer>
					</MediumContainer>
					<MediumContainer>
						<SmallContainer>
							<ItemIcon>
								<img src={IconC} />
							</ItemIcon>
							<ItemReason>
								<ReasonTextLeftBold>
								Lorem ipsum
								</ReasonTextLeftBold>
								<ReasonTextLeft>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextLeft>
							</ItemReason>
						</SmallContainer>
						<SmallContainer>
							<ItemReason>
								<ReasonTextRightBold>
								Lorem ipsum
								</ReasonTextRightBold>
								<ReasonTextRight>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit
								</ReasonTextRight>
							</ItemReason>
							<ItemIcon>
								<img src={IconD} />
							</ItemIcon>
						</SmallContainer>
					</MediumContainer>
					<ButtonHome>Más</ButtonHome>
				</MainContainer>
				<HomeFooter>
				Senior &copy; 2018 Politica de cookies
				</HomeFooter>
			</div>
		);
	}
}

Home.propTypes = {
};
