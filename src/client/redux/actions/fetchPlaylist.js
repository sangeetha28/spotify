// return a function from action Creator
import axios from "../../utils/axiosBaseConfig";
export const fetchPlaylist = playlistID => async (dispatch, getState) => {
  const { token } = getState();
  const axiosInst = axios(token);
  axiosInst
    .get(`/${playlistID}`)
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
