import React, { Component } from "react";
import "./App.css";

interface searchOrgProps {}

interface searchOrgState {
  searchSource: string;
}

class SearchOrganizations extends Component<searchOrgProps, searchOrgState> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Select a field to search on</h1>
        </div>
      </div>
    );
  }
}

export default SearchOrganizations;
