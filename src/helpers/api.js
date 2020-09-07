import axios from 'axios';

const BASE_URL = `https://coronavirus-19-api.herokuapp.com`;

export const getCasesByCountry = (country) => {
    return axios.get(`${BASE_URL}/countries/${country}`);
};
