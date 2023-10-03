
import axios from 'axios';


const baseUrl = axios.create({
  baseURL: 'http://localhost:8080/api/lecture-byId/',
  headers: {
    Accept: 'application/json'
  }
});

export default baseUrl;