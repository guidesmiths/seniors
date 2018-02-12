import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


import Search from '../../Views/Search/search.container';
import Blog from '../../Views/Blog/blog.container';
import Home from '../../Views/Home/home.container';

const MainLayout = ({children, ...rest}) => {
	return (
		<div className="page page-login">
			<div className="main">{children}</div>
		</div>
	);
};

const MainLayoutRouter = () => (
	<MainLayout>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/blog' component={Blog} />
			<Route path='/search' component={Search} />
		</Switch>
	</MainLayout>
);

export default MainLayoutRouter;
