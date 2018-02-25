import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Button} from '../../Styles/Buttons';
import {colors} from '../../Styles/Variables';
import Spinner from '../../Commons/Spinner/spinner.container';
import Header from '../../Layout/Header/header.component';


const Background = styled.div `
	font-family: 'Open Sans', sans-serif;
	width: 100vw;
	height: 100vh;
	background-color: ${colors.medium};
`;

const Wrap = styled.div `
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Modal = styled.div `
	box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.36);
	background-color: ${colors.light};
	width: 33%;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	padding-left: 36px;
	padding-right: 36px;
	padding-top: 36px;
	padding-bottom: 36px;
	h1 {
		font-weight: 600;
		font-size: 36px;
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
	$:focus {
		color: ${colors.primary};
	}
`;

const Social = styled.div `
	margin-top: 18px;
	display:flex;
	justify-content: space-between;
	button {
		color: ${colors.light};
		border-color: red;
		background-color: red;
	}
`;

const AccountOptions = styled.div `
	margin-top: 18px;
	color: ${colors.dark};
	a {
		color: ${colors.primary};
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
									<button id="submit" type="submit" name="Facebook" social="Facebook">
											Facebook
									</button>
									<button id="submit" type="submit" name="Google" social="Google">
											Google
									</button>
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
