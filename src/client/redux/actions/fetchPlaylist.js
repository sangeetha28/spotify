// return a function from action Creator
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const payload = process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET_KEY;
const encodedPayload = new Buffer(payload).toString("base64");

const opts = {
  url: "https://accounts.spotify.com/api/token",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + encodedPayload
  },
  params: {
    grant_type: "client_credentials"
  }
};

export const fetchPlaylist = () => async dispatch => {
  await axios(opts)
    .then(res => res.status === 200 && res.data.access_token)
    .then(accessToken => {
      return axios.create({
        baseURL: "https://api.spotify.com/v1/playlists/",
        timeout: 1000,
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    })
    .then(axiosInst => axiosInst.get("/0pChzR23YPaDmp1ePcdPOK"))
    .then(res => {
      const { name, owner, tracks, images } = res.data;
      dispatch({
        type: "FETCH_PLAYLISTS",
        payload: {
          name,
          owner: owner.display_name,
          tracks: tracks.items,
          images,
          total: tracks.total
        }
      });
    })
    .catch(err => console.log(err));
};
