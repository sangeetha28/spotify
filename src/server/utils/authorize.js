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

export default axios(opts)
  .then(res => res.status === 200 && res.data.access_token)
  .catch(err => console.log("Error getting Token...", err));
