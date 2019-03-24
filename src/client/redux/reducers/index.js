import { combineReducers } from "redux";
import { playList } from "./playList";
import { token } from "./token";

export default combineReducers({
  playList,
  token
});
