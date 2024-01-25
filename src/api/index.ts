import axios from "axios"; 

const axiosInstance = axios.create({
  baseURL : 'http://127.0.0.1:3000/api/',

});

axiosInstance.interceptors.request.use(async(config) => {
  
  config.headers = { 
    'Authorization': `Bearer ${(localStorage.getItem('id_token'))}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    withCredentials: false,
  }
  
  console.log(config);
  return config;
})

export default axiosInstance;