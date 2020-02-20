import { Component } from "react";
import React from "react";
import { Organization } from "../../../../modules/organizations/Organization";
import { Ticket } from "../../../../modules/tickets/Ticket";
import { User } from "../../../../modules/users/User";
import "./SearchResult.css";

interface SearchResultProps {
  results: Array<Organization> | Array<Ticket> | Array<User> | null;
}

class SearchResult extends Component<SearchResultProps, any> {
  render() {
    const { results } = this.props;
    return results ? this.getElements() : null;
  }

  /**
   * Parses an array of objects into jsx elements
   */
  getElements = (): Array<JSX.Element> | null => {
    const { results } = this.props;
    if (!results || results.length < 1) {
      return null;
    }
    const elements: Array<JSX.Element> = [];

    for (let i = 0; i < results.length; i++) {
      // Print the element's fields
      elements.push(
        <div className="result-object" key={results[i]._id}>
          {this.printElement(results[i])}
        </div>
      );

      elements.push(<div className="divider">------------</div>);

      // Print the element's related data
      const relatedItems: Array<JSX.Element> = this.printRelatedData(
        results[i]
      );
      for (let item of relatedItems) {
        elements.push(item);
      }

      elements.push(
        <div className="divider">******************************</div>
      );
    }

    return elements;
  };

  /**
   * Parses an individual object into something displayable
   */
  printElement = (element: any): Array<JSX.Element> => {
    const result: Array<JSX.Element> = [];
    Object.keys(element).forEach(key => {
      // Handle array fields
      if (typeof element[key] === "object" && element[key] !== null) {
        // Format the array into something more readable
        let arrayString: string = element[key].toString();
        arrayString = arrayString.replace(/,/g, " | ");
        result.push(
          <div className="object-field" key={key + element._id}>
            <span className="field-name">- {key} - </span>
            <span className="field-value">{arrayString}</span>
          </div>
        );
      } else if (typeof element[key] === "boolean") {
        result.push(
          <div className="object-field" key={key + element._id}>
            <span className="field-name">- {key} - </span>
            <span className="field-value">{element[key] ? "Yes" : "No"}</span>
          </div>
        );
      } else {
        result.push(
          <div className="object-field" key={key + element._id}>
            <span className="field-name">- {key} - </span>
            <span className="field-value">{element[key]}</span>
          </div>
        );
      }
    });

    return result;
  };

  /**
   * Parses an array of strings representing an element's related data
   * e.g. the tickets within an organization into displayable
   * elements
   */
  printRelatedData = (
    element: Organization | Ticket | User
  ): Array<JSX.Element> => {
    const result: Array<JSX.Element> = [];
    const data: Array<string> = element.getRelatedData();

    for (let item of data) {
      result.push(
        <div key={item + element._id} className="related-item">
          # {item}
        </div>
      );
    }

    return result;
  };
}

export default SearchResult;
