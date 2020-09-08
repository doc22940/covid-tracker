import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

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
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;
