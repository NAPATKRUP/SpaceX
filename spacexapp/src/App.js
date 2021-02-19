import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Launch from "./containers/Launch";
import Rocket from "./containers/Rocket";
import LaunchDetail from "./containers/LaunchDetail";
import RocketDetail from "./containers/RocketDetail";

const App = () => {
  const renderRouter = () => {
    return (
      <Switch>
        <Route exact path="/SpaceX" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/launch" component={Launch} />
        <Route exact path="/rocket" component={Rocket} />
        <Route exact path="/launchDetail" component={LaunchDetail} />
        <Route exact path="/rocketDetail" component={RocketDetail} />
      </Switch>
    );
  };
  return <BrowserRouter>{renderRouter()}</BrowserRouter>;
};

export default App;
