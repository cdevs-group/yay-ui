import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width="17"
      height="91"
      viewBox="0 0 17 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M16 -398H437V668H16V92.8167C16 89.8075 14.4961 86.9974 11.9923 85.3282L5.0077 80.6718C2.50391 79.0026 1 76.1925 1 73.1833V17.4C1 14.0762 2.83193 11.023 5.76471 9.45883L11.2353 6.54117C14.1681 4.97702 16 1.9238 16 -1.39999V-398Z"
          fill="#2E2E35"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-44"
          y="-428"
          width="496"
          height="1126"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-15" />
          <feGaussianBlur stdDeviation="15" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon;
