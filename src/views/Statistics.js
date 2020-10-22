import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import MonthlyChartByCountry from '../components/MonthlyChartByCountry';
import MonthlyComparisonChart from '../components/MonthlyComparisonChart';
import { getCountryList } from '../helpers/api';

function Statistics() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountryList().then((response) => {
            console.log(response.data.countries);
            setCountries(
                response.data.countries.filter((country) => country.iso2)
            );
        });
    }, []);

    return (
        <Container>
            <MonthlyChartByCountry countries={countries} />
            <MonthlyComparisonChart countries={countries} />
        </Container>
    );
}

export default Statistics;
