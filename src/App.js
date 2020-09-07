import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red, green, orange } from '@material-ui/core/colors';
import {
    GroupRounded,
    EmojiPeople,
    HotelRounded,
    SentimentVerySatisfiedOutlined,
} from '@material-ui/icons';
import {
    Container,
    Grid,
    Paper,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import CountUp from 'react-countup';

import TopBar from './components/TopBar';
import WorldMap from './components/WorldMap';
import { getCasesByCountry } from './helpers/api';

import './App.css';

const userStyles = makeStyles((theme) => ({
    item: {
        marginBottom: theme.spacing(2),
    },
    header: {
        color: theme.palette.primary.dark,
        // textTransform: 'capitalize',
    },
    card: {
        display: 'flex',
        '& svg': {
            margin: theme.spacing(1, 1, 0, 1),
            padding: theme.spacing(2),
            borderRadius: '50%',
        },
    },
    cardcontent: {
        paddingLeft: '0',
    },
    confirmed: {
        backgroundColor: orange[900],
        '& span,h4': {
            color: orange[100],
        },
        '& svg': {
            color: orange[900],
            backgroundColor: orange[100],
        },
    },
    active: {
        backgroundColor: blue[900],
        '& span,h4': {
            color: blue[100],
        },
        '& svg': {
            color: blue[900],
            backgroundColor: blue[100],
        },
    },
    recovered: {
        backgroundColor: green[900],
        '& span,h4': {
            color: green[100],
        },
        '& svg': {
            color: green[900],
            backgroundColor: green[100],
        },
    },
    deaths: {
        backgroundColor: red[900],
        '& span,h4': {
            color: red[100],
        },
        '& svg': {
            color: red[900],
            backgroundColor: red[100],
        },
    },
}));

function App() {
    const styles = userStyles();
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
                    <Grid item xs={9}>
                        <Grid container justify="center">
                            <Grid item component={Paper} xs={12} elevation={0}>
                                <WorldMap clickHandler={countryHandler} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container>
                            <Grid item className={styles.item}>
                                <Typography
                                    variant="h4"
                                    className={styles.header}
                                >
                                    {country}
                                </Typography>
                            </Grid>

                            <Grid item xs={12} className={styles.item}>
                                <Card
                                    elevation={0}
                                    className={classNames(
                                        styles.card,
                                        styles.confirmed
                                    )}
                                >
                                    <CardContent>
                                        <GroupRounded fontSize="large" />
                                    </CardContent>
                                    <CardContent className={styles.cardcontent}>
                                        <Typography variant="overline">
                                            Confirmed
                                        </Typography>
                                        <Typography variant="h4">
                                            <CountUp
                                                start={0}
                                                delay={0}
                                                duration={1}
                                                separator=","
                                                end={confirmed}
                                            />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} className={styles.item}>
                                <Card
                                    elevation={0}
                                    className={classNames(
                                        styles.card,
                                        styles.active
                                    )}
                                >
                                    <CardContent>
                                        <EmojiPeople fontSize="large" />
                                    </CardContent>
                                    <CardContent className={styles.cardcontent}>
                                        <Typography variant="overline">
                                            Active
                                        </Typography>
                                        <Typography variant="h4">
                                            <CountUp
                                                start={0}
                                                delay={0}
                                                duration={1}
                                                separator=","
                                                end={active}
                                            />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} className={styles.item}>
                                <Card
                                    elevation={0}
                                    className={classNames(
                                        styles.card,
                                        styles.recovered
                                    )}
                                >
                                    <CardContent>
                                        <SentimentVerySatisfiedOutlined fontSize="large" />
                                    </CardContent>
                                    <CardContent className={styles.cardcontent}>
                                        <Typography variant="overline">
                                            Recovered
                                        </Typography>
                                        <Typography variant="h4">
                                            <CountUp
                                                start={0}
                                                delay={0}
                                                duration={1}
                                                separator=","
                                                end={recovered}
                                            />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    elevation={0}
                                    className={classNames(
                                        styles.card,
                                        styles.deaths
                                    )}
                                >
                                    <CardContent>
                                        <HotelRounded fontSize="large" />
                                    </CardContent>
                                    <CardContent className={styles.cardcontent}>
                                        <Typography variant="overline">
                                            Deaths
                                        </Typography>
                                        <Typography variant="h4">
                                            <CountUp
                                                start={0}
                                                delay={0}
                                                duration={1}
                                                separator=","
                                                end={deaths}
                                            />
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
