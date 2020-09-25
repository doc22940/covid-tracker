import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MonthlyChart from '../components/MonthlyChart';
import CountrySelect from '../components/CountrySelect';
import { getTimelineByCountry, getCountryList } from '../helpers/api';
import MonthlyComparisonChart from '../components/MonthlyComparisonChart';

const useStyles = makeStyles((theme) => ({
    comparisonContainer: {
        '&>div': {
            marginBottom: '1rem',
        },
    },
}));

function Statistics() {
    const [timeline, setTimeline] = useState(null);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('Global');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [compareCountryOne, setCompareCountryOne] = useState('');
    const [compareCountryTwo, setCompareCountryTwo] = useState('');
    const [compareCountryCodeOne, setCompareCountryCodeOne] = useState('');
    const [compareCountryCodeTwo, setCompareCountryCodeTwo] = useState('');
    const [compareCountryOneTimeline, setCompareCountryOneTimeline] = useState(
        null
    );
    const [compareCountryTwoTimeline, setCompareCountryTwoTimeline] = useState(
        null
    );
    const [compareCaseType, setCompareCaseType] = useState('confirmed');

    const styles = useStyles();

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

    useEffect(() => {
        if (!compareCountryCodeOne) {
            return;
        }
        getTimelineByCountry(compareCountryCodeOne).then((response) => {
            const { data } = response;
            setCompareCountryOneTimeline(data.data.timeline || data.data);
        });
    }, [compareCountryCodeOne]);

    useEffect(() => {
        if (!compareCountryCodeTwo) {
            return;
        }

        getTimelineByCountry(compareCountryCodeTwo).then((response) => {
            const { data } = response;
            setCompareCountryTwoTimeline(data.data.timeline || data.data);
        });
    }, [compareCountryCodeTwo]);

    const data1 = {
        country: compareCountryOne,
        timeline: compareCountryOneTimeline,
    };
    const data2 = {
        country: compareCountryTwo,
        timeline: compareCountryTwoTimeline,
    };

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
            <Grid
                container
                direction="row"
                alignItems="center"
                component={Paper}
                elevation={0}
                style={{ marginTop: ' 2rem' }}
            >
                <Grid item xs={12}>
                    <Grid container direction="column" justify="center">
                        <Grid
                            item
                            xs={12}
                            style={{ margin: '1rem', textAlign: 'center' }}
                        >
                            <Typography variant="h5">
                                Compare Country Cases By Month
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ margin: '1rem' }}>
                            <Grid
                                container
                                justify="space-between"
                                className={styles.comparisonContainer}
                            >
                                <Grid item>
                                    <CountrySelect
                                        countries={countries}
                                        changeHandler={(e, value) => {
                                            setCompareCountryOne(
                                                value ? value.name : ''
                                            );
                                            setCompareCountryCodeOne(
                                                value ? value.iso2 : ''
                                            );
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControl
                                        variant="outlined"
                                        style={{ width: '300px' }}
                                    >
                                        <InputLabel id="demo-simple-select-outlined-label">
                                            Case Type
                                        </InputLabel>
                                        <Select
                                            label="Case Type"
                                            value={compareCaseType}
                                            onChange={(event) =>
                                                setCompareCaseType(
                                                    event.target.value
                                                )
                                            }
                                        >
                                            <MenuItem value="confirmed">
                                                Confirmed
                                            </MenuItem>
                                            <MenuItem value="active">
                                                Active
                                            </MenuItem>
                                            <MenuItem value="deaths">
                                                Deaths
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <CountrySelect
                                        countries={countries}
                                        changeHandler={(e, value) => {
                                            setCompareCountryTwo(
                                                value ? value.name : ''
                                            );
                                            setCompareCountryCodeTwo(
                                                value ? value.iso2 : ''
                                            );
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <MonthlyComparisonChart
                                caseType={compareCaseType}
                                data1={data1}
                                data2={data2}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Statistics;
