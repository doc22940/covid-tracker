import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';
import { makeStyles } from '@material-ui/core/styles';

import world from '../helpers/world.json';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        margin: '0 auto',

        '& > svg': {
            stroke: '#fff',
            '& > path': {
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
        [theme.breakpoints.only('lg')]: {
            width: '712px',
            padding: theme.spacing(5),
        },
    },
}));

function WorldMap({ clickHandler }) {
    const styles = useStyles();

    const layerProps = {
        onClick: clickHandler,
    };

    return (
        <div className={styles.root}>
            <VectorMap {...world} layerProps={layerProps} />
        </div>
    );
}

export default WorldMap;
