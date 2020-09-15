import axios from 'axios';

const BASE_URL = `https://coronavirus-19-api.herokuapp.com`;
const BASE_URL_2 = `https://covid19.mathdro.id/api`;

export const getCasesByCountry = (country) => {
    return axios.get(`${BASE_URL}/countries/${country}`);
};

export const getCountryList = () => axios.get(`${BASE_URL_2}/countries`);

export const getDailyData = () => axios.get(`${BASE_URL_2}/daily`);

export const getTimelineByCountry = (code) => {
    let URL = `https://corona-api.com/timeline`;
    if (code) {
        URL = `https://corona-api.com/countries/${code}`;
    }
    return axios.get(URL);
};
