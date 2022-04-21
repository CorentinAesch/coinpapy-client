import axios from 'axios';
const baseURL = `${process.env.REACT_APP_PROJECTS_API}`

export const getAllCoins = () => {
    return axios.get(`${baseURL}/update`);
}

export const getACoin = (id) => {
    return axios.get(`${baseURL}/${id}`);
}