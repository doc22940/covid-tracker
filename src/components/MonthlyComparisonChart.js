import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CountrySelect from '../components/CountrySelect';
import { getTimelineByCountry } from '../helpers/api';
import { createChartOption } from '../helpers/util';

const useStyles = makeStyles((theme) => ({
    comparisonContainer: {
        '&>div': {
            marginBottom: '1rem',
        },
    },
}));

function MonthlyComparisonChart({ countries }) {
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
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={createChartOption({
                                type: 'line',
                                caseType: compareCaseType,
                                data: [data1, data2],
                            })}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MonthlyComparisonChart;
