import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchOrganization from "./interface/search/organization/searchOrganization";
import Main from "./interface/main/main";
import "./index.css";
interface searchAppProps {}

interface searchAppState {}

const history = createBrowserHistory();

class App extends Component<searchAppProps, searchAppState> {
  render() {
    return (
      <Router history={history}>
        <Route component={Main} path="/" exact />
        <Route
          component={SearchOrganization}
          path="/search-organization"
          exact
        />
      </Router>
    );
  }

  searchOrgs = () => {};

  searchTickets = () => {};

  searchUsers = () => {};
}

export default App;
