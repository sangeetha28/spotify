import axios from "axios";

export default axios.create({
    baseURL: "https://open.spotify.com/playlist/",
    timeout: 1000,
})
