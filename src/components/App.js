import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import MainLayoutRouter from './Layout/MainLayout/mainLayoutRouter.container';

import './App.css';

const isAuthenticated = () => true;

const App = () => (
  <Router>
  <Switch>
    <Route 
      exact
      path="/login"
      component={props =>( !isAuthenticated() ?  <Login {...props}/> : <Redirect to={{ pathname: '/' }}/>  )}
    />
    <Route path='/register'
      component={props =>( !isAuthenticated() ?  <Register {...props}/> : <Redirect to={{ pathname: '/' }}/>  )}
    />
    <MainLayoutRouter />
    <Route component={NoMatch}/>
  </Switch>
  </Router> 
)


const Register = () => ( <div>Register</div>);

const Login = () => ( <div>Login</div>);

const NoMatch = () => ( <div>404</div>);


export default App;
