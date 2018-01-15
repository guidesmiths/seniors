import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

/* import components */

import logo from '../logo.svg';
import './App.css';

const isAuthenticated = () => true;

const App = () => (
  <Router>
  <Switch>
    <Route 
      exact
      path='/login' 
      render={props =>( !isAuthenticated() ?  <Login {...props}/> : <Redirect to={{ pathname: '/' }}/>  )}
    />
    <Route path='/register'
      render={props =>( !isAuthenticated() ?  <Register {...props}/> : <Redirect to={{ pathname: '/' }}/>  )}
    />
    <Route path='/' 
        render={props => 
          ( isAuthenticated() ? 
            ( <Main {...props} /> ) :
            ( <Redirect to={{ pathname: '/login' }}/> )
          )
        }
    />
    <Route component={NoMatch}/>
  </Switch>
  </Router> 
)


class Main extends React.Component {

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

const Register = () => ( <div>Register</div>);

const Login = () => ( <div>Login</div>);

const NoMatch = () => ( <div>404</div>);


export default App;
