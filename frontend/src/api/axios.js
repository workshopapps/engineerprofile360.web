import axios from "axios";

export default axios.create({
  baseURL: "http://api.eval360.hng.tech/api/",
  headers: {
    "content-type": "application/json",
  },
});
