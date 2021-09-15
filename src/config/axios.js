//Basic configs of the axios.. We fetch data from the mock api provided by react library

import axios from "axios";
const BASE_URL = "http://localhost:9000/";

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
