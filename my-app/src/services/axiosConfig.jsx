import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3030'
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const addToken = (token) => {
    localStorage.setItem('token', token); 
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
};

export const removeToken = () => {
    localStorage.removeItem('token'); 
    delete instance.defaults.headers.common['Authorization']; 
};

export default instance;
