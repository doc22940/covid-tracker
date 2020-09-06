import React from 'react';
import { VectorMap } from '@south-paw/react-vector-maps';

import world from '../helpers/world.json';

function WorldMap() {
    return (
        <div>
            <VectorMap {...world} />
        </div>
    );
}

export default WorldMap;
