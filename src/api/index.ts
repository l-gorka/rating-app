import axios from "axios"; 

const axiosInstance = axios.create({
  baseURL : 'http://127.0.0.1:3000/api/',
  headers: {
    'Content-Type': "application/json",
    timeout : 2000,
  }, 
});

export default axiosInstance;