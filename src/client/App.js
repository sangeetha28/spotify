import React, { Component } from "react";
import SearchBar from "./components/SearchBar";


class App extends Component {
  render() {
    return (
      <div className="topnav">
        <div className="navbar_header">
          <img className="spotify_logo" src="spotify.png" alt="spotify logo" />
        </div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
