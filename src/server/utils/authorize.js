import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const payload = process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET_KEY;
const encodedPayload = new Buffer(payload).toString("base64");

//Client Credentials Flow
//Have your application request authorization
//The request is sent to the /api/token endpoint of the Spotify Accounts service

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

//Use the access token to access the Spotify Web API
//The access token allows you to make requests to the Spotify Web API endpoints that do not require user authorization such as the Get a track endpoint, for example:

export default axios(opts)
  .then(res => res.status === 200 && res.data.access_token)
  .catch(err => console.log("Error getting Token...", err));

