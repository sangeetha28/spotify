import React, { Component } from "react";
import { connect } from "react-redux";

class PlayList extends Component {
  render() {
    return (
      <div>
        <div> Playlist Details </div>
        {this.props.name && (
          <div>I am a {this.props.name} PlayList Component</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state is", state);
  return {
    name: state.playList && state.playList.name
  };
};

export default connect(
  mapStateToProps,
  null
)(PlayList);
