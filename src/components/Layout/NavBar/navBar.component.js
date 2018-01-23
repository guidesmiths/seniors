import React from "react";
import PropTypes from "prop-types";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem } from 'reactstrap';

//import "./navBar.css";
import Spinner from '../../Commons/Spinner/spinner.container';

export default class MyNavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			loading: false,
		};
		this.onSuccess = this.onSuccess.bind(this);
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	onSuccess() {
		this.props.history.replace('/login');
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
							</NavItem>
							<UncontrolledDropdown nav>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu >
									<DropdownItem>
										Option 1
									</DropdownItem>
									<DropdownItem>
										Option 2
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>
										Reset
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							{ this.state.loading ? 
								<Spinner size={20} />
								:
								<div className="nav-item" onClick={ () => { this.setState({loading: true}); this.props.logout(this.onSuccess); }} 
									style={{    
										cursor: 'pointer',
										padding: '15px 10px 15px 20px',
										color: '#fff'
									}}>
									<p style={{lineHeight: '20px'}}>Logount</p>
								</div> }
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}

}

MyNavBar.propTypes = {
	logout: PropTypes.func
};
