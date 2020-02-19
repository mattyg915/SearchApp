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
}

class SearchField extends Component<SearchFieldProps, SearchFieldState> {
  constructor(props: Readonly<SearchFieldProps>) {
    super(props);

    this.state = {
      selected: false
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
      // special case
      const dateQuery: any = {
        date: {}
      };
      dateQuery.date[title] = event.target.value;
      query = dateQuery;
    } else {
      query[title] = event.target.value;
    }
    this.props.onInputChange(query);
  };

  /**
   * Toggle the input field on and off
   */
  selectField = () => {
    this.setState({ selected: !this.state.selected });
  };
}

export default SearchField;
