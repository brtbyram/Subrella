import axios from 'axios';
import Cookies from 'js-cookie'

const apiService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    });

apiService.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token') || Cookies.get('token');
            console.log(token)

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        return config;
    },
    (error) => Promise.reject(error),
);

export { apiService };