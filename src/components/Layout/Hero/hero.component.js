import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import hero from '../../../img/hero.jpg';
import {colors} from '../../Styles/Variables';
import {Flex} from '../../Styles/Flex';

const HeroStyle = Flex.extend`
  text-align: center;
  background-image: url(${hero});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-weight: 500;
  height: 80vh;
  padding: 48px 40px;
  ont-size: 16px;
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 48px 200px 100px;
      }
  @media (min-width: 1280px) {
    font-size: 24px;
    line-height: 32px;
    padding: 48px 400px 90px;
  }
`;

const Title = styled.h1 `
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 72px;
      }
  @media (min-width: 1280px) {
    font-size: 96px;
  }
`;

export default class Hero extends React.Component {
	render(){
		return(
			<HeroStyle directionLg={'column'} justify={'flex-end'}>
				<Title>Seniors</Title>
				<p>Welcome to the first application that cares about what you care. Find the best caregivers for your elderlies.</p>
			</HeroStyle>
		);
	}
}
