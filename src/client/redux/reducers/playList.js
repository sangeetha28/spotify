export const playList = (state = null, { type, action }) => {
  switch (type) {
    case "FETCH_PLAYLIST":
      return action;
    default:
      return state;
  }
};
