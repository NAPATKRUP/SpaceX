import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './containers/Home'
import Launch from './containers/Launch'
import Rocket from './containers/Rocket'

const App = () => {

    const renderRouter = () => {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/launch" component={Launch}/>
                <Route exact path="/rocket" component={Rocket}/>
            </Switch>
        );
    };
    return (
        <BrowserRouter>{renderRouter()}</BrowserRouter>
    )
};

export default App