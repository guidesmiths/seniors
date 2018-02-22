import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button} from '../../Styles/Buttons';
import {colors} from '../../Styles/Variables';
import Reason from "../../Commons/Reason/reason.components";
import IconA from '../../../img/icon-a.svg';
import IconB from '../../../img/icon-b.svg';
import IconC from '../../../img/icon-c.svg';
import IconD from '../../../img/icon-d.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    height: 258px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
   }
   @media (min-width: 1024px) {
    height: 328px;
    margin-bottom: 32px;
   }
`;

const MainContainer = styled.div`
  background-color: ${colors.medium};
  padding-bottom: 44px;
  padding-top: 36px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    padding-top: 92px;
    padding-bottom: 48px;
   }
  @media (min-width: 1024px) {
    padding-top: 128px;
    padding-bottom: 64px;
  }
`;

export default class Reasons extends React.Component {
	render(){
		return(
			<MainContainer>
				<Wrap>
					<Reason src={IconA}/>
					<Reason orientation="right" src={IconB}/>
					<Reason src={IconC}/>
					<Reason orientation="right" src={IconD}/>
				</Wrap>
				<Button>Más</Button>
			</MainContainer>
		);
	}
}
