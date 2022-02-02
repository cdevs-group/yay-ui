import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill="white" fill-opacity="0.15" />
      <g filter="url(#filter0_d_301_3504)">
        <path
          d="M19.5858 26.6561L13.9289 20.9992M13.9289 20.9992L19.5858 15.3424M13.9289 20.9992H28.0711"
          stroke={theme.colors.green}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_301_3504"
          x="8.51477"
          y="12.3418"
          width="24.5563"
          height="21.3145"
          filterUnits="userSpaceOnUse"
          colorInterpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_301_3504" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_301_3504" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon;
