import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="26" height="22" viewBox="0 0 26 22" {...props}>
      <g filter="url(#filter0_d)">
      <path d="M11.5858 14.6568L5.92893 8.99998M5.92893 8.99998L11.5858 3.34312M5.92893 8.99998L20.0711 8.99998" stroke={props.color} stroke-width="2" stroke-linecap="round"/>
      </g>
      <defs>
      <filter id="filter0_d" x="0.515625" y="0.343018" width="24.5563" height="21.3137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear" x1="8.33309" y1="13.6669" x2="16.5355" y2="5.46444" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4CEE3E"/>
      <stop offset="1" stop-color="#47DA3B"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
