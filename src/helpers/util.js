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
