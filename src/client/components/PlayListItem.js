import React from "react";
import SpotifyPlayer from "./SpotifyPlayer";

const secondsToMinutesAndSec = time => {
  const minutes = Math.floor(time / 60000);
  const seconds = (time - minutes * 60000).toString().substr(0, 2);
  return minutes + ":" + seconds;
};

const size = {
  width: "75px",
  height: "75px"
};

const view = "list"; 
const theme = "black"; 

const namesLimiter = ({ names, isArtistName }) => {
  const limiter = isArtistName ? 16 : 45;
  const newNames = [];
  if (names.length > limiter) {
    names.split(" ").reduce((acc, curVal) => {
      if (acc + curVal.length <= limiter) {
        newNames.push(curVal);
      }
      return acc + curVal.length;
    }, 0);
    return newNames.join(" ") + "...";
  }
  return names;
};

export const PlayListItem = props =>
  props.trackItems.map(item => {
    const trackName = item.track.name;
    const { uri } = item.track;
    const { artists, name } = item.track.album;
    const duration = item.track.duration_ms;
    const names = artists.map(({ name }) => name);
    const artistNames =
      names.length > 1 ? names.slice(0, -1).join(",") : names.toString();
    return (
      <div key={item.track.id} className="playList-item">
        <SpotifyPlayer uri={uri} size={size} view={view} theme={theme} />
        <div className="track-details">
          <div className="track-name">{trackName}</div>
          <div className="artist-details">
            <span>
              {namesLimiter({ names: artistNames, isArtistName: true })}
            </span>
            <span className="seperator">.</span>
            <span>{namesLimiter({ names: name, isArtistName: false })}</span>
          </div>
        </div>
        <div className="playlist-duration">
          {secondsToMinutesAndSec(duration)}
        </div>
      </div>
    );
  });
