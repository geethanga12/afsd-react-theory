import axios from "axios";

const instance = axios.create({
  baseURL: "https://student-api.acpt.lk/api/",
});

export default instance;