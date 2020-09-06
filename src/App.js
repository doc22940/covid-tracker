import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red, green, orange } from '@material-ui/core/colors';
import {
    Container,
    Grid,
    Paper,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';

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
                                    style={{ backgroundColor: orange[900] }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="overline"
                                            style={{ color: orange[100] }}
                                        >
                                            Confirmed
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            style={{ color: orange[100] }}
                                        >
                                            5855
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} className={styles.item}>
                                <Card
                                    elevation={0}
                                    style={{ backgroundColor: blue[900] }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="overline"
                                            style={{ color: blue[100] }}
                                        >
                                            Active
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            style={{ color: blue[100] }}
                                        >
                                            5855
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} className={styles.item}>
                                <Card
                                    elevation={0}
                                    style={{ backgroundColor: green[900] }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="overline"
                                            style={{ color: green[100] }}
                                        >
                                            Recovered
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            style={{ color: green[100] }}
                                        >
                                            5855
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card
                                    elevation={0}
                                    style={{ backgroundColor: red[900] }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="overline"
                                            style={{ color: red[100] }}
                                        >
                                            Deaths
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            style={{ color: red[100] }}
                                        >
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
