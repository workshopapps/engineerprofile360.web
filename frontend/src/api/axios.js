import axios from "axios";

const BASEURL = "https://api.eval360.hng.tech/api/";
// const BASEURL = "http://104.225.216.199:8000/api/";

export default axios.create({
  baseURL: BASEURL,
  headers: {
    "content-type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASEURL,
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "*",
  },
  withCredentials: true,
});
