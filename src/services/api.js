import axios from "axios";

axios.defaults.baseURL= 'https://6374ee9908104a9c5f8d9aeb.mockapi.io';

export const getContacts = async () => {
    const response = await axios.get('/contacts');
    return response.data;
};