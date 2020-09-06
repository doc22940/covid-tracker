import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginBottom: '1rem',
    },
});

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
                    <Typography variant="h6">Covid Tracker</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopBar;
