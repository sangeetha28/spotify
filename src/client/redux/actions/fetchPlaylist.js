import axios from "../../utils/axiosBaseConfig";
// return a function from action Creator
export const fetchPlaylist = () => async (dispatch) => {
    const payload = await axios.get('/0pChzR23YPaDmp1ePcdPOK');
    dispatch({type: 'FETCH_PLAYLISTS', payload})
};
