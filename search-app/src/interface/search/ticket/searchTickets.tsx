import React, { Component } from "react";
import "./searchTickets.css";

interface searchTicketProps {}

interface searchTicketState {
  searchSource: string;
}

class SearchTickets extends Component<searchTicketProps, searchTicketState> {
  render() {
    return (
      <div className="search-tickets">
        <div className="search-tickets__header">
          <h1>Select a field to search on</h1>
        </div>
      </div>
    );
  }

  getSearchFields = () => {};
}

export default SearchTickets;
