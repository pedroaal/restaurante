import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'application/json',
  },
});

// api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default api;