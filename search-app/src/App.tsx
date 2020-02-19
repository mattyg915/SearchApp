import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Search from "./interface/search/Search/Search";
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
        <Route component={Search} path="/searchOrgs/:searchType" exact />
        <Route component={Search} path="/searchTickets/:searchType" exact />
        <Route component={Search} path="/searchUsers/:searchType" exact />
      </Router>
    );
  }

  searchOrgs = () => {};

  searchTickets = () => {};

  searchUsers = () => {};
}

export default App;
