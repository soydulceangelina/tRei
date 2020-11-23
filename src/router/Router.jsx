import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { SessionValidationContainer } from '../containers';
import { Login, SignUp, Main } from '../pages/index';

const Router = () => (
  <BrowserRouter>
    <SessionValidationContainer>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </SessionValidationContainer>
  </BrowserRouter>
);

export default Router;
