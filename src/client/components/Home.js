import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        {" "}
        I am spotify Home Component{" "}
        <button
          onClick={() => {
            console.log("Hey I am a spotify button");
          }}
        >
          Spotify{" "}
        </button>
      </div>
    );
  }
}

export default Home;
