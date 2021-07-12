import axios from "axios";

const API_TOKEN = "1914610dad389bec6f372865e57938d6";

export default axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: {
    max: 9,
    key: API_TOKEN,
  },
});
