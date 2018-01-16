import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from '../NavBar/navBar.container';
import Home from '../../Views/Home/home.container';
import Blog from '../../Views/Blog/blog.container';

const MainLayout = ({children, ...rest}) => {
  return (
    <div className="page page-login">
      <NavBar />
      <div className="main">{children}</div>
    </div>
  )
}

const MainLayoutRouter = () => (
  <MainLayout>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog' component={Blog} />

    </Switch>
  </MainLayout>
  )

export default MainLayoutRouter;
