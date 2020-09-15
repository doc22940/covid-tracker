import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import MonthlyChart from '../components/MonthlyChart';

import CountrySelect from '../components/CountrySelect';
import { getTimelineByCountry, getCountryList } from '../helpers/api';

function Statistics() {
    const [timeline, setTimeline] = useState(null);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('Global');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    useEffect(() => {
        getCountryList().then((response) => {
            console.log(response.data.countries);
            setCountries(
                response.data.countries.filter((country) => country.iso2)
            );
        });
    }, []);

    useEffect(() => {
        getTimelineByCountry(selectedCountryCode).then((response) => {
            const { data } = response;
            setTimeline(data.data.timeline || data.data);
        });
    }, [selectedCountryCode]);

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item xs={4}>
                    <CountrySelect
                        countries={countries}
                        changeHandler={(e, value) => {
                            setSelectedCountry(value ? value.name : 'Global');
                            setSelectedCountryCode(value ? value.iso2 : '');
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <MonthlyChart data={timeline} country={selectedCountry} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Statistics;
