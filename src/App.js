import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Grid, Paper } from '@material-ui/core';

import TopBar from './components/TopBar';
import WorldMap from './components/WorldMap';
import CaseList from './components/CaseList';

import { getCasesByCountry } from './helpers/api';
import { createCaseDict } from './helpers/util';

import './App.css';

const userStyles = makeStyles((theme) => ({}));

function App() {
    const [country, setCountry] = useState('World');
    const [confirmed, setConfirmed] = useState(0);
    const [active, setActive] = useState(0);
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);

    const countryHandler = ({ target }) =>
        setCountry(target.attributes.name.value);

    useEffect(() => {
        getCasesByCountry(country).then((response) => {
            const { data } = response;
            setConfirmed(data.cases ? data.cases : 0);
            setActive(data.active ? data.active : 0);
            setRecovered(data.recovered ? data.recovered : 0);
            setDeaths(data.deaths ? data.deaths : 0);
        });
    }, [country]);

    return (
        <div className="App">
            <TopBar />

            <Container>
                <Grid container spacing={2} style={{ marginTop: '1.5rem' }}>
                    <Grid item xs={12} md={9}>
                        <Grid container justify="center">
                            <Grid item component={Paper} xs={12} elevation={0}>
                                <WorldMap clickHandler={countryHandler} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CaseList
                            name={country}
                            cases={createCaseDict({
                                confirmed,
                                active,
                                deaths,
                                recovered,
                            })}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
