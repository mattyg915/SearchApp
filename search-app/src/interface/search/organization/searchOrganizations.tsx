import React, { Component } from "react";
import "./searchOrganizations.css";

interface searchOrgProps {}

interface searchOrgState {
  searchSource: string;
}

class SearchOrganizations extends Component<searchOrgProps, searchOrgState> {
  render() {
    return (
      <div className="search-organization">
        <div className="search-organization__header">
          <h1>Select a field to search on</h1>
        </div>
      </div>
    );
  }

  getSearchFields = () => {};
}

export default SearchOrganizations;