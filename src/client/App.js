import React, { Component } from "react";
import SearchBarObj from "./components/SearchBar";

import PlayListItem from "./components/PlayList";
const SearchBar = SearchBarObj.component;

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="topnav">
            <div className="navbar_header">
              <img
                className="spotify_logo"
                src="spotify.png"
                alt="spotify logo"
              />
            </div>
            <SearchBar />
          </div>
          <PlayListItem />
        </div>
        <div className="footer" />
      </div>
    );
  }
}

export default {
  component: App,
  fetchData: SearchBarObj.fetchData
};
