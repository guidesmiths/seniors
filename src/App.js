import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  
    this.changeNumber = this.changeNumber.bind(this)
  }

  changeNumber = (value) => {
    this.setState({number: value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>this.changeNumber(5)} label="change to 5" />
        <p>{this.state.number}</p>
      </div>
    );
  }
}

export default App;
