import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/api", // altere para a URL correta da sua API
});

export default api;
