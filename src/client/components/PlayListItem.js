import React from "react";

const secondsToMinutesAndSec = time => {
  const minutes = Math.floor(time / 60000);
  const seconds = (time - minutes * 60000).toString().substr(0, 2);
  return minutes + ":" + seconds;
};

export const PlayListItem = props =>
  props.trackItems.map(item => {
    const trackName = item.track.name;
    const { artists, name } = item.track.album;
    const duration = item.track.duration_ms;
    return (
      <div className="playList-item">
        <div className="track-details">
          <div>{trackName}</div>
          <div className="artist-details">
            <div>{artists.map(({ name }) => name)}</div>
            <div>{name}</div>
          </div>
        </div>
        <div>{secondsToMinutesAndSec(duration)}</div>
      </div>
    );
  });
