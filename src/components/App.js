import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

/* import components */
import Home from './Views/Home/home.container';

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
            ( <Home {...props} /> ) :
            ( <Redirect to={{ pathname: '/login' }}/> )
          )
        }
    />
    <Route component={NoMatch}/>
  </Switch>
  </Router> 
)


const Register = () => ( <div>Register</div>);

const Login = () => ( <div>Login</div>);

const NoMatch = () => ( <div>404</div>);


export default App;
