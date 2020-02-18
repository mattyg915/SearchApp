import React, { Component } from "react";
import "./searchUsers.css";

interface searchUserProps {}

interface searchUserState {
  searchSource: string;
}

class SearchUsers extends Component<searchUserProps, searchUserState> {
  render() {
    return (
      <div className="search-users">
        <div className="search-users__header">
          <h1>Select a field to search on</h1>
        </div>
      </div>
    );
  }

  getSearchFields = () => {};
}

export default SearchUsers;
