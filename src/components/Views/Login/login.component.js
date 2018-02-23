import React from "react";
import PropTypes from "prop-types";
import Spinner from '../../Commons/Spinner/spinner.container';
import Header from '../../Layout/Header/header.component';




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
			<div>

				<Header appearance="solid"/>
				<div id="pwd-container">

					<section className="login-form">

						<div role="login">

							<h1>Seniors</h1>

							<div
								type="email"
								name="email"
								id="email"
								required
								className="form-control input-lg"
								value={this.state.email}
								placeholder="Email"
								onChange={this.handleChange}
							/>

							<div
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

							<button id="submit" type="submit" name="go" className="btn btn-lg btn-primary btn-block" onClick={()=>this.props.login(this.state.email, this.state.password, this.onSuccess)}>
									Sign in
							</button>

							<div>
								<a onClick={()=>this.props.history.replace('/')}>Create account</a> or <a onClick={()=>this.props.history.replace('/')}>reset password</a>
							</div>

						</div>

						<div className="form-links">
							<a onClick={()=>this.props.history.replace('/')}>www.seniors.com</a>
						</div>

					</section>

				</div>

			</div>
		);
	}

}

Login.propTypes = {
	name: PropTypes.string
};
