import React, { Component } from "react";
import { fetchPlaylist } from "../redux/actions/fetchPlaylist";
import { connect } from "react-redux";

class Search extends Component {
  state = { playlistID: "0pChzR23YPaDmp1ePcdPOK" };

  componentDidMount() {
    this.props.fetchPlaylist();
  }

  onInputChange(event) {
    this.setState({ playlistID: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.props.fetchPlaylist(this.state.playlistID);
    }
  }

  render() {
    console.log("State", this.state);
    return (
      <div className="ui search searchbar">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Playlist ID..."
            value={this.state.value}
            onChange={event => this.onInputChange(event)}
            onKeyPress={event => this.handleKeyPress(event)}
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
    );
  }
}

function fetchData(store) {
  return store.dispatch(fetchPlaylist());
}

export default {
  component: connect(
    null,
    { fetchPlaylist }
  )(Search),
  fetchData
};
