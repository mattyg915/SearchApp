import "./main.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

interface searchAppProps {}

interface searchAppState {}

class Main extends Component<searchAppProps, searchAppState> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to TicketSearch!</h1>
        </div>
        <div className="App-options">
          <div className="App-options-text">Select a search option</div>
          <div className="App-option-select">
            <Link
              className="App-option-button"
              to={{
                pathname: "/searchOrgs/organizations",
                state: { type: "org" }
              }}
            >
              Search Organizations
            </Link>
            <Link
              className="App-option-button"
              to="/searchTickets/tickets"
              type="ticket"
            >
              Search Tickets
            </Link>
            <Link
              className="App-option-button"
              to="/searchUsers/users"
              type="user"
            >
              Search Users
            </Link>
          </div>
        </div>
      </div>
    );
  }

  searchOrgs = () => {};

  searchTickets = () => {};

  searchUsers = () => {};
}

export default Main;
