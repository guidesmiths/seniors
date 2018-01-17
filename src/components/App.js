import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import MainLayoutRouter from './Layout/MainLayout/mainLayoutRouter.container';

import Login from './Views/Login/login.container';
import Register from './Views/Register/register.container';

import { isAuthenticated } from '../persistence/session';

import './App.css';


const App = () => (
	<Router>
		<Switch>
			<Route 
				exact
				path="/login"
				component={props =>( isAuthenticated() ? <Redirect to={{ pathname: '/' }}/> : <Login {...props}/>  )}
			/>
			<Route path='/register'
				component={props =>( isAuthenticated() ? <Redirect to={{ pathname: '/' }}/> : <Register {...props}/>  )}
			/>
			<Route 
				path="/"
				component={props =>( isAuthenticated() ? <MainLayoutRouter /> : <Login {...props}/> )}
			/>
			<Route component={NoMatch}/>

		</Switch>
	</Router> 
);

const NoMatch = () => ( <div>404</div>);


export default App;