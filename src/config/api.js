import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXTAUTH_URL}/api/`,
});

// api.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default api;