import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from './containers/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home /> } />
      <Route render={() => <NotFound/> }/>
    </Switch>
  )
}

export default Routes