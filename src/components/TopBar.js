import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '1rem',
    },

    logo: {
        margin: theme.spacing(0, 2, 0, 2),
    },
    header: {
        color: '#26b899',
        flexGrow: 1,
    },
    link: {
        color: '#26b899',
    },
}));

function TopBar() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <AppBar
                position="static"
                elevation={1}
                style={{ backgroundColor: '#fff', color: '#000' }}
            >
                <Toolbar>
                    <Logo size={48} className={styles.logo} />
                    <Typography variant="h5" className={styles.header}>
                        Covid-19 Tracker
                    </Typography>
                    <Button
                        className={styles.link}
                        component={RouterLink}
                        to="/"
                    >
                        Home
                    </Button>
                    <Button
                        className={styles.link}
                        component={RouterLink}
                        to="/stats"
                    >
                        Statistics
                    </Button>
                    <Button
                        href="https://github.com/yogiindia/covid-tracker"
                        className={styles.link}
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'github-alt']}
                            size="lg"
                        />
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;
