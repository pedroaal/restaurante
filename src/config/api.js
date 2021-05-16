import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

// api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default api;