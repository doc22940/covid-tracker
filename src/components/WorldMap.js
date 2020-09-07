import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import { makeStyles } from '@material-ui/core/styles';

import world from '../helpers/world.json';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
        '& > svg': {
            stroke: '#fff',
            '& > path': {
                // fill: '#a82b2b',
                fill: '#EE2677',
                cursor: 'pointer',
                outline: 'none',

                // When a layer is hovered
                '&:hover': {
                    fill: '#EBB3A9',
                },

                // When a layer is focused.
                '&:focus': {
                    fill: '#E86252',
                },
            },
        },
    },
}));

function WorldMap() {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <VectorMap {...world} />
        </div>
    );
}

export default WorldMap;
