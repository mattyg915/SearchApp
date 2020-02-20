import { Component } from "react";
import React from "react";
import "./SearchField.css";

interface SearchFieldProps {
  title: string;
  type: string;
  onInputChange: Function;
}

interface SearchFieldState {
  selected: boolean;
  query: any;
}

class SearchField extends Component<SearchFieldProps, SearchFieldState> {
  constructor(props: Readonly<SearchFieldProps>) {
    super(props);

    this.state = {
      selected: false,
      query: {}
    };
  }
  render() {
    const { title } = this.props;
    const { selected } = this.state;
    return (
      <div className="search-field">
        <button className="search-field__button" onClick={this.selectField}>
          {title}
        </button>
        {selected ? (
          <input
            onChange={this.formNewQuery}
            className="search-field__input"
          ></input>
        ) : null}
      </div>
    );
  }

  /**
   * Takse new input and formulates a query from it
   * then saves it to parent state
   */
  formNewQuery = (event: { target: { value: string } }) => {
    const { type, title } = this.props;
    let query: any = {};
    if (type === "date") {
      // Dates are special
      const dateQuery: any = {};
      dateQuery[title] = {
        date: event.target.value
      };
      query = dateQuery;
    } else if (type === "number") {
      query[title] = parseInt(event.target.value);
    } else if (type === "boolean") {
      const bool =
        event.target.value === "true" || event.target.value === "yes";
      query[title] = bool;
    } else {
      query[title] = event.target.value;
    }

    this.setState({ query });
    this.props.onInputChange(query);
  };

  /**
   * Toggle the input field on and off
   */
  selectField = () => {
    let { selected, query } = this.state;
    const { title, type } = this.props;

    // Clear the query on deselect
    if (selected) {
      this.props.onInputChange(query, true);
      query = null;
    } else {
      // Otherwise insert 'undefined' for empty value searches
      if (type === "date") {
        // dates are annoying
        query[title] = {};
        query[title]["date"] = undefined;
      } else {
        query[title] = undefined;
      }

      this.props.onInputChange(query);
    }

    selected = !selected;
    this.setState({ selected, query });
  };
}

export default SearchField;
