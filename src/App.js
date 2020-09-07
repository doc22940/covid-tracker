import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red, green, orange } from '@material-ui/core/colors';
import {
    GroupRounded,
    EmojiPeople,
    HotelRounded,
    SentimentVerySatisfied,
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

import TopBar from './components/TopBar';
import WorldMap from './components/WorldMap';

import './App.css';

const userStyles = makeStyles((theme) => ({
    item: {
        marginBottom: theme.spacing(2),
    },
    header: {
        color: theme.palette.primary.dark,
    },
    card: {
        display: 'flex',
        '& svg': {
            margin: theme.spacing(1, 1, 0, 1),
            padding: theme.spacing(2),
            borderRadius: '50%',
        },
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

    return (
        <div className="App">
            <TopBar />

            <Container>
                <Grid container spacing={2} style={{ marginTop: '1.5rem' }}>
                    <Grid item xs={9}>
                        <Grid container justify="center">
                            <Grid item component={Paper} xs={12} elevation={0}>
                                <WorldMap />
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
                                    World Cases
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
                                    <CardContent>
                                        <Typography variant="overline">
                                            Confirmed
                                        </Typography>
                                        <Typography variant="h4">
                                            5855
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
                                    <CardContent>
                                        <Typography variant="overline">
                                            Active
                                        </Typography>
                                        <Typography variant="h4">
                                            5855
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
                                    <CardContent>
                                        <Typography variant="overline">
                                            Recovered
                                        </Typography>
                                        <Typography variant="h4">
                                            5855
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
                                    <CardContent>
                                        <Typography variant="overline">
                                            Deaths
                                        </Typography>
                                        <Typography variant="h4">
                                            5855
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
