import React from "react";

const secondsToMinutesAndSec = time => {
  const minutes = Math.floor(time / 60000);
  const seconds = (time - minutes * 60000).toString().substr(0, 2);
  return minutes + ":" + seconds;
};

export const PlayListItem = props =>
  props.trackItems &&
  props.trackItems.map(item => {
    const trackName = item.track.name;
    const { artists, name } = item.track.album;
    const duration = item.track.duration_ms;
    const names = artists.map(({ name }) => name);
    const artistNames =
      names.length > 1 ? names.slice(0, -1).join(",") : names.toString();
    return (
      <div key={item.track.id} className="playList-item">
        <div className="track-details">
          <div>{trackName}</div>
          <div className="artist-details">
            <span>{artistNames}</span>
            <span className="seperator">.</span>
            <span>{name}</span>
          </div>
        </div>
        <div className="playlist-duration">
          {secondsToMinutesAndSec(duration)}
        </div>
      </div>
    );
  });
