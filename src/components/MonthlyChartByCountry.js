import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import CountrySelect from './CountrySelect';
import { getTimelineByCountry } from '../helpers/api';
import { createColumnChartOptions } from '../helpers/util';

function MonthlyChartByCountry({ countries }) {
    const [timeline, setTimeline] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('Global');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    useEffect(() => {
        getTimelineByCountry(selectedCountryCode).then((response) => {
            const { data } = response;
            setTimeline(data.data.timeline || data.data);
        });
    }, [selectedCountryCode]);

    return (
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
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={createColumnChartOptions(
                                timeline,
                                selectedCountry
                            )}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default MonthlyChartByCountry;
