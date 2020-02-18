import React, { Component } from "react";
import { Link, Router, Route, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import SearchOrganization from "./interface/search/organization/searchOrganization";
import "./app.scss";

interface searchAppProps {}

interface searchAppState {}

const history = createBrowserHistory();

class App extends Component<searchAppProps, searchAppState> {
  render() {
    return (
      <Router history={history}>
        <Route
          component={SearchOrganization}
          path="/search-organization"
          exact
        />
        <div className="App">
          <div className="App-header">
            <h1>Welcome to TicketSearch!</h1>
          </div>
          <div className="options">
            <div className="options-text">Select a search option</div>
            <div className="option-select">
              <NavLink className="option-button" to="/search-organization">
                Search Organizations
              </NavLink>
              <button className="option-button" onClick={this.searchTickets}>
                Search Tickets
              </button>
              <button className="option-button" onClick={this.searchUsers}>
                Search Users
              </button>
            </div>
          </div>
        </div>
      </Router>
    );
  }

  searchOrgs = () => {};

  searchTickets = () => {};

  searchUsers = () => {};
}

export default App;
