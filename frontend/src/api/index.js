import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

const api = axios.create({
    baseURL: API_URL,
});

// Token interceptor if token is available
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
});

export const registerLand = (location, account) => {
    return api.post('/register-land', { location, account });
};

export const getAllLands = () => {
    return api.get('/all-lands');
};

export const transferLand = (id, newOwner, account) => {
    return api.post('/transfer-land', { id, newOwner, account });
};

export const registerUser = (name, email, password) => {
    return api.post('/register', { name, email, password });
};

export const loginUser = (email, password) => {
    return api.post('/login', { email, password });
};
