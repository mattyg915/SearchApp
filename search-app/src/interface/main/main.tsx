import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.scss";

interface searchAppProps {}

interface searchAppState {}

class Main extends Component<searchAppProps, searchAppState> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to TicketSearch!</h1>
        </div>
        <div className="options">
          <div className="options-text">Select a search option</div>
          <div className="option-select">
            <Link className="option-button" to="/search-organizations">
              Search Organizations
            </Link>
            <Link className="option-button" to="/search-tickets">
              Search Tickets
            </Link>
            <Link className="option-button" to="/search-users">
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
