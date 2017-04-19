import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchInput: '' };
  }

  render() {
    return (
      <div>
        <input
        value={this.state.searchInput}
        onChange={e => this.setState({ searchInput: e.target.value })} />
      </div>
    );
  };

};

export default SearchBar;
