import React, { Component } from "react";
import { connect } from "react-redux";
import { PlayListItem } from "./PlayListItem";

class PlayList extends Component {
  render() {
    return (
      <div className="playlist-container">
        <div className="playlist-details">
          {this.props.img && (
            <div className="image-container">
              <img
                className="playlist-img"
                src={this.props.img}
                alt="album image"
              />
              <div className="overlay">
                <svg
                  className="svg"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  fill="#fff"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>play2</title>
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z" />
                </svg>
              </div>
            </div>
          )}
          {this.props.name && (
            <div className="playlist-name">{this.props.name}</div>
          )}
          {this.props.owner && (
            <div className="playlist-owner">{this.props.owner}</div>
          )}
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
