import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2222',
})

export default api;