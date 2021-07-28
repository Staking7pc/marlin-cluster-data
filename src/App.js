import React from "react";
import Navbars from "./components/Navbars";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function routes(props) {
  return (
    <div>
      <Router>
        <React.Fragment>
          <Navbars/>
          <Switch>
            <Route path="/marlin/analytics/:clusterId" component={Home} />
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default routes;