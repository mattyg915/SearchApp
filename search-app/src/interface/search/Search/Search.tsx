import React, { Component } from "react";
import "./Search.css";
import { orgSearchFields } from "../../../modules/organizations/organizations.interfaces";
import SearchField from "../SearchField/SearchField";
import { BaseController } from "../../../controllers/base/Base.controller";
import { OrganizationController } from "../../../controllers/organization/Organization.controller";
import { TicketController } from "../../../controllers/ticket/Ticket.controller";
import { UserController } from "../../../controllers/user/User.controller";
import { userSearchFields } from "../../../modules/users/user.interfaces";
import { ticketSearchFields } from "../../../modules/tickets/ticket.interfaces";

interface searchState {
  title: string;
  ctrl: BaseController; // Will be extended with the right controller at mount
  searchFields: Array<string> | null;
}

class Search extends Component<any, searchState> {
  constructor(props: any) {
    super(props);

    const { searchType } = this.props.match.params;
    let ctrl: BaseController;
    let title: string;
    let searchFields: Array<string> | null;

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
        ctrl = new BaseController();
        title = "Default Search";
        searchFields = null;
        break;
    }

    this.state = { ctrl, title, searchFields };
  }

  render() {
    const { title } = this.state;

    return (
      <div className="search">
        <div className="search__header">
          <h1>{title}</h1>
        </div>
        <div className="search__body">
          <div className="search__field-text">Select fields to search on:</div>
          <div className="search__field-select">{this.getSearchFields()}</div>
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
          key={item}
          title={item}
          onInputChange={this.onInputChange}
        />
      );
    }

    return fields;
  };

  onInputChange = () => {};
}

export default Search;
