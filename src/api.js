import axios from 'axios';
const baseURL = `${process.env.REACT_APP_COINPAPY_API}/api`

export const index = () => {
    return axios.get(`${baseURL}/`);
}

export const getAllCoins = () => {
    return axios.get(`${baseURL}/update`);
}

export const getTrendings = () => {
    return axios.get(`${baseURL}/trending`);
}

export const getACoin = (id) => {
    return axios.get(`${baseURL}/coins/${id}`,  {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    });
}

export const getAllAssets = () => {
    return axios.get(`${baseURL}/assets`,  {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    });
}

export const getAsset = (id) => {
    return axios.get(`${baseURL}/assets/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    });
}

export const addTransaction = (transaction) => {
    return axios.post(`${baseURL}/transaction/create`, transaction, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    });
} 

export const getAllTransaction = () => {
    return axios.get(`${baseURL}/transaction`);
}

export const deleteATransaction = (assetId, transactionId) => {
    return axios.post(`${baseURL}/asset/${assetId}/transaction/${transactionId}/delete`, transactionId, transactionId, {
        headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }
    });
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
