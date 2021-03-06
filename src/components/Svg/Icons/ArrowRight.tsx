import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="45"
        height="45"
        rx="9.5"
        fill={props.fill || theme.colors.green}
        stroke={props.fill || "url(#paint0_linearArrowRight)"}
      />
      <g filter={props.fill || "url(#filter0_dArrowRight)"}>
        <path d="M24.35 16L32 23.5M32 23.5L24.35 31M32 23.5H15" stroke={props.stroke || "white"} strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_dArrowRight"
          x="11"
          y="15.2859"
          width="26.4284"
          height="24.4281"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feOffset dy="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.195672 0 0 0 0 0.779167 0 0 0 0 0.146094 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default Icon;
