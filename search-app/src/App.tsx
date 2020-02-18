import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchOrganizations from "./interface/search/organization/searchOrganizations";
import Main from "./interface/main/main";
import "./index.css";
import SearchTickets from "./interface/search/ticket/searchTickets";
import SearchUsers from "./interface/search/user/searchUsers";
interface searchAppProps {}

interface searchAppState {}

const history = createBrowserHistory();

class App extends Component<searchAppProps, searchAppState> {
  render() {
    return (
      <Router history={history}>
        <Route component={Main} path="/" exact />
        <Route
          component={SearchOrganizations}
          path="/search-organizations"
          exact
        />
        <Route component={SearchTickets} path="/search-tickets" exact />
        <Route component={SearchUsers} path="/search-users" exact />
      </Router>
    );
  }

  searchOrgs = () => {};

  searchTickets = () => {};

  searchUsers = () => {};
}

export default App;
