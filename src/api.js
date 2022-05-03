import axios from 'axios';
const baseURL = `${process.env.COINPAPY_API}/api`

export const getAllCoins = () => {
    return axios.get(`${baseURL}/update`);
}

export const getACoin = (id) => {
    return axios.get(`${baseURL}/${id}`);
}

export const getAllAssets = () => {
    return axios.get(`${baseURL}/assets`);
}

export const getAsset = (id) => {
    return axios.get(`${baseURL}/assets/${id}`);
}

export const signup = (user) => {
    return axios.post(`${baseURL}/signup`, user);
}

export const login = (user) => {
    return axios.post(`${baseURL}/login`, user);
}

export const verify = (storedToken) => {
    return axios.get(`${baseURL}/verify`, {
        headers: { Authorization: `Bearer ${storedToken}` }
    })
}
