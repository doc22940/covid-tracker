import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue, orange, green, red } from '@material-ui/core/colors';
import classNames from 'classnames';
import CountUp from 'react-countup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) => ({
    item: {
        marginBottom: theme.spacing(2),
    },
    card: {
        display: 'flex',
        '& svg': {
            margin: theme.spacing(1, 1, 0, 1),
            padding: theme.spacing(2),
            borderRadius: '50%',
            fontSize: '2.15rem',
            width: '1em !important',
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

function CaseItem({ data }) {
    const styles = useStyles();
    const { title, icon, value } = data;

    console.log(data);
    return (
        <Grid item xs={12} className={styles.item}>
            <Card
                elevation={0}
                className={classNames(styles.card, styles[title])}
            >
                <CardContent>
                    <FontAwesomeIcon icon={icon} />
                </CardContent>
                <CardContent className={styles.cardcontent}>
                    <Typography variant="overline">{title}</Typography>
                    <Typography variant="h4">
                        <CountUp
                            start={0}
                            delay={0}
                            duration={1}
                            separator=","
                            end={value}
                        />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default CaseItem;
