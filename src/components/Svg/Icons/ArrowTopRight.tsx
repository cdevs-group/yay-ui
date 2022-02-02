import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg width="42px" viewBox="0 0 42 42" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill={props.fill || theme.colors.green} />
      <g filter={props.fill || "url(#filter0_dArrowTopRight)"}>
        <path
          d="M19 16H27M27 16V24M27 16L17 26"
          stroke={props.stroke || "white"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter id="filter0_dArrowTopRight" x="12" y="13" width="20" height="20" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </Svg>
  );
};

export default Icon;
