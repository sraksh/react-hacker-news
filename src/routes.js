import React from "react";
import { Route, Switch } from "react-router-dom";
import AppComponent from "./App";
import HomeComponent from "./components/Home/Home";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/app" component={AppComponent} />
    </Switch>
  );
};
