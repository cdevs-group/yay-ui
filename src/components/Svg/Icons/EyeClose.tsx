import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 16" {...props}>
      <g filter="url(#filter0_d)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.08644 2.58988C5.58922 2.36134 6.18207 2.58366 6.41061 3.08644L6.51253 3.31067C7.81069 6.16662 10.6583 8.00024 13.7955 8.00024H14.205C17.3422 8.00024 20.1898 6.16662 21.488 3.31067L21.5899 3.08644C21.8184 2.58366 22.4113 2.36134 22.914 2.58988C23.4168 2.81842 23.6391 3.41127 23.4106 3.91405L23.3087 4.13827C21.686 7.70822 18.1265 10.0002 14.205 10.0002H13.7955C9.87403 10.0002 6.3145 7.70822 4.6918 4.13827L4.58988 3.91405C4.36134 3.41127 4.58366 2.81842 5.08644 2.58988Z" fill="white" />
      </g>
      <defs>
        <filter id="filter0_d" x="0.5" y="0.5" width="27.0005" height="15.5002" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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