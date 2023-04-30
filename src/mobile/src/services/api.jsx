import axios from 'axios';

const api = axios.create({
    baseURL: 'https://donabenicia-dev.azurewebsites.net',
});

export default api;