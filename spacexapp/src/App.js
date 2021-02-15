import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Rocket from "./components/Rocket";
import Launch from "./components/Launch";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rocket">Rocket</Link>
          </li>
          <li>
            <Link to="/lauch">Launch</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/rocket">
            <Rocket />
          </Route>
          <Route path="/launch">
            <Launch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
