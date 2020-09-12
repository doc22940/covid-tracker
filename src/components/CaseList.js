import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CaseItem from './CaseItem';

const useStyles = makeStyles((theme) => ({
    item: {
        marginBottom: theme.spacing(2),
    },
    header: {
        color: theme.palette.primary.dark,
    },
}));

function CaseList(props) {
    const styles = useStyles();
    const { name, cases } = props;

    // console.log(props);
    return (
        <Grid container>
            <Grid item className={styles.item}>
                <Typography variant="h4" className={styles.header}>
                    {name}
                </Typography>
            </Grid>
            {cases.map((data) => (
                <CaseItem data={data} key={data.title} />
            ))}
        </Grid>
    );
}

export default CaseList;
