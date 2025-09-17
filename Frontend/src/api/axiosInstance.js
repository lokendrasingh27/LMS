// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // backend base URL
  withCredentials: true, // send cookies (auth) if needed
});

export default axiosInstance;
