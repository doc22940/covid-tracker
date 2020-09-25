import { getMonth } from 'date-fns';

export const createCaseDict = (data) => {
    const { active, confirmed, deaths, recovered } = data;

    return [
        {
            title: 'confirmed',
            icon: 'users',
            value: confirmed,
        },
        {
            title: 'active',
            icon: 'head-side-mask',
            value: active,
        },
        {
            title: 'recovered',
            icon: 'smile',
            value: recovered,
        },
        {
            title: 'deaths',
            icon: 'bed',
            value: deaths,
        },
    ];
};

export const getMonthWiseCases = (timeline) => {
    if (!timeline) {
        return null;
    }

    console.log(timeline);

    let monthData = {};

    timeline.forEach((item) => {
        const month = getMonth(new Date(item.date));

        if (!monthData[month]) {
            monthData[month] = [item];
        } else {
            monthData[month].push(item);
        }
    });

    console.log(monthData);

    for (let month in monthData) {
        monthData[month] = monthData[month].reduce((prev, current) =>
            prev.date > current.date ? prev : current
        );
    }

    console.log(monthData);

    return monthData;
};

export const createColumnChartOptions = (timeline, country) => {
    const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sept,Oct,Nov,Dec'.split(
        ','
    );

    const monthlyCases = getMonthWiseCases(timeline);

    const createSeries = (monthlyCases, caseType, color) => {
        const series = { name: caseType, color, colorByPoint: false, data: [] };

        for (let key in monthlyCases) {
            series.data.push({
                name: months[key],
                y: monthlyCases[key][caseType],
            });
        }

        return series;
    };

    const options = {
        chart: {
            type: 'column',
        },
        subtitle: {
            text: 'Monthly Covid-19 Cases',
        },
        title: {
            text: country,
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            title: {
                text: 'Corona Cases',
            },
        },
        series: [
            createSeries(monthlyCases, 'confirmed', '#f39c12'),
            createSeries(monthlyCases, 'active', '#2980b9'),
            createSeries(monthlyCases, 'recovered', '#27ae60'),
            createSeries(monthlyCases, 'deaths', '#e74c3c'),
        ],
    };

    console.log(options);
    return options;
};

export const createChartOption = (optionsData) => {
    const months = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sept,Oct,Nov,Dec'.split(
        ','
    );

    let series = optionsData.data.map((item) => {
        if (!item.timeline) {
            return null;
        }

        const cases = getMonthWiseCases(item.timeline);

        const series = {
            name: item.country,
            // color: item.color,
            colorByPoint: false,
            data: [],
        };

        for (let key in cases) {
            series.data.push({
                name: months[key],
                y: cases[key][optionsData.caseType],
            });
        }

        return series;
    });

    series = series.filter((item) => !!item);

    const options = {
        chart: {
            type: optionsData.type,
        },
        subtitle: {
            text: 'Monthly Covid-19 Cases',
        },
        title: {
            text: 'Covid-19 Cases comparison',
        },
        xAxis: {
            type: 'category',
        },
        yAxis: {
            title: {
                text: 'Corona Cases',
            },
        },
        series,
    };

    return options;
};
