import axios from 'axios';
import { loginUri } from 'src/consts';
import { getTokens} from 'src/utils/auth';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/',
});

// axiosInstance.interceptors.request.use(async (config) => {
//   config.headers = {
//     Authorization: `Bearer ${localStorage.getItem('id_token')}`,
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     withCredentials: false,
//   };

//   return config;
// });

// axiosInstance.interceptors.response.use(
//   async (config) => {
//     return config;
//   },
//   async (error) => {
//     const refreshToken = localStorage.getItem('refresh_token');
//     if (error.response.status === 401 && !error.config.refreshed && refreshToken) {
//       await getTokens(true)
//       error.config.refreshed = true;

//       return axiosInstance(error.config);
//     }

//     window.location.href = loginUri;
//   }
// );

export default axiosInstance;
