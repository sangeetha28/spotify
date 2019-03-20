import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="ui search searchbar">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Playlist ID..." />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
    );
  }
}

export default Search;
