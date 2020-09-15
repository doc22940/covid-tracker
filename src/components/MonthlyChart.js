import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { createColumnChartOptions } from '../helpers/util';

function MonthlyChart({ data, country }) {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={createColumnChartOptions(data, country)}
        />
    );
}

export default MonthlyChart;
