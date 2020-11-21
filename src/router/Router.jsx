import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login, SignUp, Main } from '../components/index';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Router;
