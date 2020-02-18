import React, { Component } from "react";
import "./app.scss";

interface searchAppProps {}

interface searchAppState {}

class App extends Component<searchAppProps, searchAppState> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to TicketSearch!</h1>
        </div>
        <div className="options">
          <div className="options-text">Select a search option</div>
          <div className="option-select">
            <button className="option-button" onClick={this.searchOrgs}>
              Search Organizations
            </button>
            <button className="option-button" onClick={this.searchTickets}>
              Search Tickets
            </button>
            <button className="option-button" onClick={this.searchUsers}>
              Search Users
            </button>
          </div>
        </div>
      </div>
    );
  }

  searchOrgs = () => {};
  searchTickets = () => {};
  searchUsers = () => {};
}

export default App;
