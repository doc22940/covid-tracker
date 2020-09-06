import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    card: {
        marginBottom: '.5rem',
        padding: '2rem',
    },
}));

function App() {
    const styles = userStyles();

    return (
        <div className="App">
            <TopBar />
            <Container>
                <Grid container>
                    <Grid
                        item
                        component={Paper}
                        elevation={0}
                        xs={7}
                        className={styles.card}
                    >
                        <WorldMap />
                    </Grid>

                    <Grid item xs={5}>
                        <Grid container>
                            <Grid item component={Card} elevation={0} xs={6}>
                                <CardContent>
                                    <Typography>Confrimed</Typography>
                                    <Typography>54555545454</Typography>
                                </CardContent>
                            </Grid>
                            <Grid item component={Card} elevation={0} xs={6}>
                                <CardContent>
                                    <Typography>Active</Typography>
                                    <Typography>54555545454</Typography>
                                </CardContent>
                            </Grid>
                            <Grid item component={Card} elevation={0} xs={6}>
                                <CardContent>
                                    <Typography>Recovered</Typography>
                                    <Typography>54555545454</Typography>
                                </CardContent>
                            </Grid>
                            <Grid item component={Card} elevation={0} xs={6}>
                                <CardContent>
                                    <Typography>Deaths</Typography>
                                    <Typography>54555545454</Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
