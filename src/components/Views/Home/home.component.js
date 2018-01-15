import React from "react";
import PropTypes from "prop-types";
import "./home.css";
import logo from '../../../logo.svg';

export default class Home extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>this.changeNumber(5)} label="change to 5" />
        <p>{value}</p>
      </div>
    )
  }

}
