import { Component } from "react";
import React from "react";
import "./SearchField.css";

interface SearchFieldProps {
  title: string;
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
        {selected ? <input className="search-field__input"></input> : null}
      </div>
    );
  }

  selectField = () => {
    this.setState({ selected: !this.state.selected });
  };
}

export default SearchField;
