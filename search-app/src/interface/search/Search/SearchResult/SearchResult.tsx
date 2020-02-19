import { Component } from "react";
import React from "react";
import { Organization } from "../../../../modules/organizations/Organization";
import { Ticket } from "../../../../modules/tickets/Ticket";
import { User } from "../../../../modules/users/User";

interface SearchResultProps {
  results: Array<Organization> | Array<Ticket> | Array<User> | null;
}

class SearchResult extends Component<SearchResultProps, any> {
  render() {
    const { results } = this.props;
    return this.getElements();
  }

  getElements = (): Array<JSX.Element> | null => {
    const { results } = this.props;
    if (!results || results.length < 1) {
      return null;
    }
    const elements: Array<JSX.Element> = [];

    for (let i = 0; i < results.length; i++) {
      elements.push(<div key={i}>{this.printElement(results[i])}</div>);
      elements.push(<div>-----------------</div>);
    }

    return elements;
  };

  printElement = (element: any): Array<JSX.Element> => {
    const result: Array<JSX.Element> = [];
    Object.keys(element).forEach(key => {
      // Handle array fields
      if (typeof element[key] === "object") {
        let arrayString: string = element[key].toString();
        arrayString = arrayString.replace(/,/g, " | ");
        console.log(typeof arrayString);
        result.push(
          <li key={key + element[key]}>
            {key}: {arrayString}
          </li>
        );
      } else {
        result.push(
          <li key={key + element[key]}>
            {key}: {element[key]}
          </li>
        );
      }
    });

    return result;
  };
}

export default SearchResult;
