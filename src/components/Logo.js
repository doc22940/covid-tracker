import * as React from 'react';

function Logo(props) {
    const { size } = props;
    return (
        <svg height={size} viewBox="0 0 60 42" width={size} {...props}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M11.981 29.007A12.462 12.462 0 014.8 26.641 10.688 10.688 0 010 18v-5a4 4 0 014-4h6a1 1 0 010 2H4a2 2 0 00-2 2v5a8.718 8.718 0 003.962 7.011 9.864 9.864 0 008.875 1.523 1 1 0 11.657 1.888c-1.13.39-2.318.588-3.513.585zM48.021 29.013a10.476 10.476 0 01-5.356-1.444 1 1 0 011.016-1.723 9.325 9.325 0 009.435-.247A9.061 9.061 0 0058 18v-5a2 2 0 00-2-2h-6a1 1 0 010-2h6a4 4 0 014 4v5a11.056 11.056 0 01-5.892 9.336 12.3 12.3 0 01-6.087 1.677z"
                    fill="#338f7c"
                />
                <path
                    d="M50 10v11c.083 10.655-7.867 19.665-18.45 20.91-1.03.12-2.07.12-3.1 0C17.867 40.665 9.917 31.655 10 21V10l4-.01a16.764 16.764 0 0012.9-6.51 3.985 3.985 0 016.19-.01A16.778 16.778 0 0046 9.99z"
                    fill="#26b899"
                />
                <path
                    d="M50 10v2l-4-.01a16.778 16.778 0 01-12.91-6.52 3.985 3.985 0 00-6.19.01A16.764 16.764 0 0114 11.99L10 12v-2a2.006 2.006 0 012-2h1.51A13.331 13.331 0 0023.8 2.95a7.99 7.99 0 0112.4 0A13.331 13.331 0 0046.49 8H48a2.006 2.006 0 012 2z"
                    fill="#80cbb7"
                />
                <g fill="#149f84">
                    <path d="M30 25.988a44.625 44.625 0 01-13.3-2.033 1 1 0 01.594-1.91 42.507 42.507 0 0025.406 0 1 1 0 01.594 1.91A44.625 44.625 0 0130 25.988zM30 18.994a85.637 85.637 0 01-13.154-1.006 1 1 0 01.308-1.976 84.471 84.471 0 0025.692 0 1 1 0 11.308 1.976A85.637 85.637 0 0130 18.994zM30 34.007a31.037 31.037 0 01-13.431-3.1 1 1 0 11.862-1.8 28.632 28.632 0 0025.138 0 1 1 0 11.862 1.8A31.037 31.037 0 0130 34.007z" />
                </g>
            </g>
        </svg>
    );
}

export default Logo;
