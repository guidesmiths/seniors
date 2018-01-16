import React from "react";
import PropTypes from "prop-types";
import { 
	Grid,
	Col,
	Row,
	FormControl,
	Button
} from 'react-bootstrap';

import "./login.css";


export default class Login extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.id]: e.target.value });
	}

	render(){
		return(
			<Grid className="container">
				<Row id="pwd-container">
					<Col md={4}></Col>
					<Col md={4}>
						<section className="login-form">
							<form method="post" action="#" role="login">

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

								<div className="pwstrength_viewport_progress"></div>

								{this.state.email}
								{this.state.password}

								<Button type="submit" name="go" className="btn btn-lg btn-primary btn-block">
									Sign in
								</Button>
								
								<div>
									<a onClick={()=>this.props.history.replace('/')}>Create account</a> or <a onClick={()=>this.props.history.replace('/')}>reset password</a>
								</div>

							</form>

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