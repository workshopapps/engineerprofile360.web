import axios from "axios";

export default axios.create({
  baseURL: "https://api.skript.hng.tech/api/",
  headers: {
    "content-type": "text/plain",
  },
});
