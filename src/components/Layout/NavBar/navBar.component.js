import React from "react";
import PropTypes from "prop-types";
import "./navBar.css";
import logo from '../../../logo.svg';

import { Navbar, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';

export default class NavBar extends React.Component {
  static PropTypes = {
    value: PropTypes.value,
    setValue: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {}
  }

  changeNumber = (value) => {
    this.props.setValue(value);
  }

  render(){
    const { value } = this.props;
    console.log(this.props)
    return(
        <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} onClick={()=>this.props.history.push('/blog')}>
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
    )
  }

}
