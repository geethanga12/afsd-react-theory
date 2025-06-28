import axios from "axios";
const BEARER_TOKEN = localStorage.getItem("afsd-key");

const instance = axios.create({
  baseURL: "https://student-api.acpt.lk/api/",
  headers: {
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
});

export default instance;
