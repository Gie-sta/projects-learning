import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.meteo.lt/v1'
});