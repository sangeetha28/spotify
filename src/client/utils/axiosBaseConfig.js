import axios from "axios";

export default function(accessToken) {
  return axios.create({
    baseURL: "https://api.spotify.com/v1/playlists/",
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}
