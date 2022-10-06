import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_TWITCH_TOKEN_URL,
  headers: {
    "Content-Type": process.env.REACT_APP_TWITCH_TOKEN_CONTENT_TYPE,
  },
  params: {
    client_id: process.env.REACT_APP_TWITCH_CLIENT_ID,
    client_secret: process.env.REACT_APP_TWITCH_CLIENT_SECRET,
    grant_type: process.env.REACT_APP_TWITCH_GRANT_TYPE,
  },
  timeout: 5000
});

export const httpTwitch = (baseURL, token) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: "Bearer " + token,
      "Client-Id": process.env.REACT_APP_TWITCH_CLIENT_ID,
    },
  });
};
