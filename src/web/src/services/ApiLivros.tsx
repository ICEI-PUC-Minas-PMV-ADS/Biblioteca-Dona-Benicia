import axios from "axios";

const api = axios.create({
  baseURL: "https://donabenicia-dev.azurewebsites.net", // altere para a URL correta da sua API
});

export default api;
