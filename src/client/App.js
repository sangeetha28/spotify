import React, { Component } from "react";
import SearchBarObj from "./components/SearchBar";
import PlayListItem from "./components/PlayList";
const SearchBar = SearchBarObj.component;

class App extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default {
  component: App,
  fetchData: SearchBarObj.fetchData
};
