import React from "react";
import PropTypes from "prop-types";
import { 
	Grid,
	Col,
	Row,
	FormControl,
	Button
} from 'react-bootstrap';

import Spinner from '../../Commons/Spinner/spinner.container';

import "./login.css";


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
			<Grid className="container">
				<Row id="pwd-container">
					<Col md={4}></Col>
					<Col md={4}>
						<section className="login-form">
							<div role="login">

								<h1>Seniors</h1>

								<FormControl
									type="email"
									name="email"
									id="email"
									required
									className="form-control input-lg"
									value={this.state.email}
									placeholder="Email"
									onChange={this.handleChange}
								/>

								<FormControl
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
								
								<div>
									<a onClick={()=>this.props.history.replace('/')}>Create account</a> or <a onClick={()=>this.props.history.replace('/')}>reset password</a>
								</div>

							</div>

							<div className="form-links">
								<a onClick={()=>this.props.history.replace('/')}>www.seniors.com</a>
							</div>

						</section>  
					</Col>
					<Col md={4}></Col>
				</Row>
			</Grid>
		);
	}

}

Login.propTypes = {
	name: PropTypes.string
};
