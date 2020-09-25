import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { createChartOption } from '../helpers/util';

function MonthlyComparisonChart({ data1, data2, caseType }) {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={createChartOption({
                type: 'line',
                caseType,
                data: [data1, data2],
            })}
        />
    );
}

export default MonthlyComparisonChart;
