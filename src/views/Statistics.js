import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
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
                component={Paper}
                elevation={0}
            >
                <Grid item xs={12}>
                    <Grid container direction="column" justify="center">
                        <Grid item xs={12} style={{ margin: '1rem' }}>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <CountrySelect
                                        countries={countries}
                                        changeHandler={(e, value) => {
                                            setSelectedCountry(
                                                value ? value.name : 'Global'
                                            );
                                            setSelectedCountryCode(
                                                value ? value.iso2 : ''
                                            );
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <MonthlyChart
                                data={timeline}
                                country={selectedCountry}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Statistics;
