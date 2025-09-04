import axios from "axios";

export const publicApiClient= axios.create({
  baseURL: "http://localhost:8050/api/v1",
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
})

export const protectedApiClient = axios.create({
    baseURL: 'http://localhost:8050/api/v1',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
    },
});

protectedApiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); 
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


