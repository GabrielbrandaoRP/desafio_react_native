import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // troque pela sua API
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
