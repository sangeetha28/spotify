import React, { Component } from "react";


class SpotifyPlayer extends Component {
  render() {
    const { uri, view, theme, size } = this.props;
    return (
      <iframe
        title="Spotify"
        className="SpotifyPlayer"
        src={`https://embed.spotify.com/?uri=${uri}&view=${view}&theme=${theme}`}
        width={size.width}
        height={size.height}
        allowtransparency="true"
        frameborder="0"
      />
    );
  }
}

export default SpotifyPlayer;
