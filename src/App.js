import React from "react";
import Navbar from "./component/Navigation/index.js";
import Landing from "./container/landing.js";
import InfoCard from "./component/InfoCard/index.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Favourites from "./container/favourites.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/fav">
            <Favourites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
