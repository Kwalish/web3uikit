import React from 'react';

const eyeClosedIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>eye closed icon</title>
        <path
            d="M16 12C16 9.79 14.21 8 12 8C11.94 8 11.89 8.01 11.83 8.02L15.98 12.17C15.99 12.11 16 12.06 16 12Z"
            fill={fill}
        />
        <path
            d="M12.68 15.93L8.07 11.32C8.03 11.54 8 11.77 8 12C8 14.21 9.79 16 12 16C12.23 16 12.46 15.97 12.68 15.93Z"
            fill={fill}
        />
        <path
            d="M12 18.01C11.35 18.01 10.71 17.9 10.09 17.73C8.79 17.33 7.61 16.65 6.62 15.76C6.55 15.7 6.48 15.65 6.42 15.58C6.35 15.51 6.28 15.43 6.21 15.36C5.36 14.47 4.65 13.38 4.13 12.13C4.12 12.1 4.09 12.05 4.08 12.01C4.1 11.96 4.12 11.92 4.14 11.87C4.58 10.82 5.16 9.89 5.84 9.08L4.4 7.66C4.35 7.72 4.29 7.78 4.23 7.84C3.48 8.72 2.87 9.71 2.41 10.79C2.29 11.07 2.17 11.36 2.06 11.66C2.02 11.77 2 11.89 2 12.01C2 12.13 2.02 12.25 2.06 12.36C2.17 12.65 2.29 12.94 2.41 13.22C2.87 14.3 3.48 15.29 4.23 16.17C6.23 18.58 9.01 20.01 12 20.01C13.36 20.01 14.68 19.71 15.9 19.15L14.35 17.6C13.6 17.87 12.81 18.01 12 18.01Z"
            fill={fill}
        />
        <path
            d="M21.94 11.66C21.8 11.27 21.63 10.89 21.45 10.52C21.45 10.52 21.45 10.52 21.45 10.51C19.55 6.52 15.96 4 12 4C10.79 4 9.61 4.25 8.51 4.69L10.1 6.28C10.72 6.11 11.35 6 12 6C14.89 6 17.56 7.73 19.19 10.52C19.27 10.66 19.35 10.8 19.42 10.95C19.56 11.22 19.69 11.49 19.82 11.78C19.85 11.86 19.89 11.93 19.92 12.01C19.89 12.09 19.85 12.16 19.82 12.24C19.7 12.53 19.56 12.8 19.42 13.07C19.34 13.21 19.27 13.36 19.19 13.5C18.96 13.9 18.7 14.27 18.43 14.62L19.86 16.05C20.47 15.29 21.01 14.44 21.45 13.51C21.45 13.51 21.45 13.51 21.45 13.5C21.63 13.13 21.79 12.75 21.94 12.36C21.98 12.25 22 12.13 22 12.01C22 11.89 21.98 11.77 21.94 11.66Z"
            fill={fill}
        />
        <path
            d="M15.66 13.61L11.99 9.95L10.05 8.01L8.83 6.78L7.05 5C6.56 4.51 5.77 4.51 5.28 5C4.8 5.49 4.8 6.27 5.27 6.76L5.28 6.77L6.7 8.18L17.54 19.02C17.78 19.26 18.1 19.39 18.42 19.39C18.74 19.39 19.06 19.27 19.3 19.02C19.79 18.53 19.79 17.74 19.3 17.25L15.66 13.61Z"
            fill={fill}
        />
    </svg>
);
export default eyeClosedIcon;
