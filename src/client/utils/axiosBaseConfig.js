import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

export default axios.create({
  baseURL: "https://api.spotify.com/v1/playlists/",
  timeout: 1000,
  headers: {
    Authorization:
      "Bearer BQBulrPonkb0Joc7j3f869vHo3KMLD4ATc0KA94T9RjQHCIfYHJVAr8eVeolEnGU0d1CFXrSAPT216KPQGAuXRkDB_ehbsEW7eAUGk-iots8haEe4iFmMTiNsYhlta4rqA7BDKEMqOeWh0UM1GfS3_50dwpnC5uoEg"
  }
});

// const refreshAuthLogic = err =>
//   axios.post("https://accounts.spotify.com/api/token").then(res => {
//     localStorage.setItem("token", res.data.token);
//     err.response.config.headers["Authentication"] = "Bearer " + res.data.token;
//     return Promise.resolve();
//   });
