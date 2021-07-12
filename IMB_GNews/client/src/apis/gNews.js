import axios from "axios";

const API_TOKEN = process.env.REACT_APP_GNEWS_API_KEY;

export default axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: {
    max: 9,
    // lang: 'en',
    token: API_TOKEN
  },
});
