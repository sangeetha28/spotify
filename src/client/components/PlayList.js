import React, { Component } from "react";
import { connect } from "react-redux";
import { PlayListItem } from "./PlayListItem";

class PlayList extends Component {
  render() {
    return (
      <div className="playlist-container">
        <div className="playlist-details">
          {this.props.img && <img src={this.props.img} alt="album image" />}
          {this.props.name && <div>{this.props.name}</div>}
          {this.props.owner && <div>{this.props.owner}</div>}
          <div>
            <button className="play-btn">PLAY</button>{" "}
          </div>
          {this.props.total && <div>{this.props.total} SONGS</div>}
        </div>
        <div className="playlist-items">
          <PlayListItem trackItems={this.props.tracks} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.playList && state.playList.name,
    img: state.playList && state.playList.images[0].url,
    owner: state.playList && state.playList.owner,
    total: state.playList && state.playList.total,
    tracks: state.playList && state.playList.tracks
  };
};

export default connect(
  mapStateToProps,
  null
)(PlayList);
