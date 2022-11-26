import axios from "axios";

export default axios.create({
  baseURL: "http://api.skript.hng.tech/api/",
  headers: {
    "content-type": "text/plain",
  },
});
