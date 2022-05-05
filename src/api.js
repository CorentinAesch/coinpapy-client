import axios from 'axios';
const baseURL = `${process.env.REACT_APP_COINPAPY_API}/api`

export const index = () => {
    return axios.get(`${baseURL}/`);
}

export const getAllCoins = () => {
    return axios.get(`${baseURL}/update`);
}

export const getACoin = (id) => {
    return axios.get(`${baseURL}/${id}`);
}

export const getAllAssets = () => {
    return axios.get(`${baseURL}/assets`,  {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    });
}

export const getAsset = (id) => {
    return axios.get(`${baseURL}/assets/${id}`);
}

/* export const addTransaction = () => {
    return axios.get(`${baseURL}/transaction/create`);
} */

export const getAllTransaction = () => {
    return axios.get(`${baseURL}/transaction`);
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
