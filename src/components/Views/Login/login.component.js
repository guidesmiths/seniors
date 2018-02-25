import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button} from '../../Styles/Buttons';
import {colors} from '../../Styles/Variables';
import Spinner from '../../Commons/Spinner/spinner.container';
import Header from '../../Layout/Header/header.component';
import Google from '../../../img/google.svg';
import Facebook from '../../../img/facebook.svg';


const Background = styled.div `
	font-family: 'Open Sans', sans-serif;
	width: 100vw;
	height: 100vh;
	background-color: ${colors.medium};
	a {
		color: ${colors.primary};
	}
`;

const Wrap = styled.div `
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Modal = styled.div `
	margin-top: 64px;
	box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.36);
	background-color: ${colors.light};
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	padding-left: 18px;
	padding-right: 18px;
	padding-top: 18px;
	padding-bottom: 18px;
	font-size: 12px;
	h1 {
		font-weight: 600;
		font-size: 24px;
	}
	.form-links {
		font-weight: 700;
	}
	@media (min-width: 768px) {
		width: 50%;
		padding-left: 36px;
		padding-right: 36px;
		padding-top: 36px;
		padding-bottom: 36px;
		h1 {
			font-weight: 600;
			font-size: 36px;
		}
	}
	@media (min-width: 1024px) {
		width: 33%;
	}
`;

const Input = styled.input `
  margin-bottom:12px;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  padding-left: 14px;
  height: 36px;
  width: 100%;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  &::placeholder {
    color: ${colors.primary};
	}
`;

const Social = styled.div `
	margin-top: 18px;
	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const AccountOptions = styled.div `
	margin-top: 18px;
	color: ${colors.dark};
`;

const SocialButton = Button.extend  `
	display:flex;
	align-items: center;
	justify-content: space-around;
	background-color: blue;
	border-color: blue;
	padding-left:8px;
	width: 75%;
	font-size: 10px;
	img {
		border-left: solid 1px white;
		padding-left: 4px;
		width:18%;
	}
	&:hover {
		border-color: blue;
		background-color: white;
		color: blue;
		img {
			border-color: blue;
		}
	}
	&:last-child {
		margin-top: 14px;
		background-color: red;
		border-color: red;
		img {
			border-left: solid 1px white;
			padding-left: 6px;
			width:20%;
		}
		&:hover {
			background-color: white;
			color: red;
			img {
				border-color: red;
			}
		}
	}
	@media (min-width: 768px) {
		width: 49%;
		font-size: 10px;
		&:last-child {
			margin-top: 0;
		}
		@media (min-width: 1024px) {
			width: 45%;
	}
`;


export default class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.onSuccess = this.onSuccess.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}

	onSuccess() {
		this.props.history.replace('/');
	}

	render(){
		return(
			<Background>

				<Header appearance="solid"/>
				<Wrap>
					<Modal id="pwd-container">

						<section className="login-form">

							<div role="login">

								<h1>Seniors</h1>

								<Input
									type="email"
									name="email"
									id="email"
									required
									className="form-control input-lg"
									value={this.state.email}
									placeholder="Email"
									onChange={this.handleChange}
								/>

								<Input
									type="password"
									name="password"
									id="password"
									required=""
									className="form-control input-lg"
									value={this.state.password}
									placeholder="Password"
									onChange={this.handleChange}
								/>

								{ this.props.isChecking && <Spinner/>}
								{ this.props.error && <div className="errorBox">{this.props.error}</div>}

								<Button id="submit" type="submit" name="go" className="btn btn-lg btn-primary btn-block" onClick={()=>this.props.login(this.state.email, this.state.password, this.onSuccess)}>
										Sign in
								</Button>

								<hr/>

								<Social>
									<SocialButton id="submit" type="submit" name="Facebook">
										Login with Facebook <img src={Facebook} alt="Facebook-icon"/>
									</SocialButton>
									<SocialButton id="submit" type="submit" name="Google">
										Login with Google<img src={Google} alt="Google-icon"/>
									</SocialButton>
								</Social>

								<AccountOptions>
									<a onClick={()=>this.props.history.replace('/')}>Create account</a> or <a onClick={()=>this.props.history.replace('/')}>reset password</a>
								</AccountOptions>

							</div>

							<div className="form-links">
								<a onClick={()=>this.props.history.replace('/')}>www.seniors.com</a>
							</div>

						</section>

					</Modal>
				</Wrap>

			</Background>
		);
	}

}

Login.propTypes = {
	name: PropTypes.string
};
