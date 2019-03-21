export const playList = (state = null, { type, payload }) => {
  switch (type) {
    case "FETCH_PLAYLISTS":
      return payload;
    default:
      return state;
  }
};
