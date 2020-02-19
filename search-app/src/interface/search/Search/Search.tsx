import React, { Component } from "react";
import "./Search.css";
import { orgSearchFields } from "../../../modules/organizations/organizations.interfaces";
import SearchField from "../SearchField/SearchField";
import { OrganizationController } from "../../../controllers/organization/Organization.controller";
import { TicketController } from "../../../controllers/ticket/Ticket.controller";
import { UserController } from "../../../controllers/user/User.controller";
import { userSearchFields } from "../../../modules/users/user.interfaces";
import { ticketSearchFields } from "../../../modules/tickets/ticket.interfaces";
import { searchObject } from "../../../utils/types";
import { Organization } from "../../../modules/organizations/Organization";
import { Ticket } from "../../../modules/tickets/Ticket";
import { User } from "../../../modules/users/User";
import SearchResult from "./SearchResult/SearchResult";

interface searchState {
  title: string;
  ctrl: OrganizationController | TicketController | UserController | null;
  searchFields: Array<searchObject> | null;
  query: any;
  results: Array<Organization> | Array<Ticket> | Array<User> | null;
}

class Search extends Component<any, searchState> {
  constructor(props: any) {
    super(props);

    const { searchType } = this.props.match.params;
    let ctrl: OrganizationController | TicketController | UserController | null;
    let title: string;
    let searchFields: Array<searchObject> | null;

    switch (searchType) {
      case "organizations":
        ctrl = new OrganizationController();
        title = "Organization Search";
        searchFields = orgSearchFields;
        break;
      case "tickets":
        ctrl = new TicketController();
        title = "Ticket Search";
        searchFields = ticketSearchFields;
        break;
      case "users":
        ctrl = new UserController();
        title = "User Search";
        searchFields = userSearchFields;
        break;
      default:
        // Really should never hit this but it complains
        ctrl = null;
        title = "Something went wrong";
        searchFields = null;
        break;
    }

    this.state = { ctrl, title, searchFields, query: {}, results: null };
  }

  render() {
    const { title, results } = this.state;

    return (
      <div className="search">
        <div className="search__header">
          <h1>{title}</h1>
        </div>
        <div className="search__body">
          <div className="search__text-and-button">
            <div className="search__text-and-button--text">
              Select fields to search on:
            </div>
            <button
              onClick={this.search}
              className="search__text-and-button--button"
            >
              Search!
            </button>
          </div>
          <div className="search__select-and-results">
            <div className="search__field-select">{this.getSearchFields()}</div>
            <div className="search__results">
              <SearchResult results={results} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getSearchFields = (): Array<JSX.Element> | null => {
    const fields: Array<JSX.Element> = [];
    const { searchFields } = this.state;

    if (!searchFields) {
      return null;
    }
    for (let item of searchFields) {
      fields.push(
        <SearchField
          key={item.title}
          title={item.title}
          type={item.type}
          onInputChange={this.addToQuery}
        />
      );
    }

    return fields;
  };

  /**
   * Saves the new input for a searchField to query
   * @param newQuery the query to update
   * @param? remove optional, if true deletes the provided query from the master query
   */
  addToQuery = (newQuery: object, remove?: boolean) => {
    const { query } = this.state;
    if (remove) {
      for (let key in newQuery) {
        delete query[key];
      }
    } else {
      Object.assign(query, newQuery);
    }
    this.setState({ query });
  };

  /**
   * Searches for matching data using the query in state
   */
  search = () => {
    const { ctrl, query } = this.state;

    let results: Array<Organization> | Array<Ticket> | Array<User> | null;

    if (ctrl instanceof OrganizationController) {
      results = ctrl.getMatchingOrgs(query);
    } else if (ctrl instanceof TicketController) {
      results = ctrl.getMatchingTickets(query);
    } else if (ctrl instanceof UserController) {
      results = ctrl.getMatchingUsers(query);
    } else {
      results = null;
    }

    this.setState({ results });
  };
}

export default Search;
