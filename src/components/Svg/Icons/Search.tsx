import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g opacity="0.78" filter="url(#filter0_d)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2 7.5C13.2 9.54345 11.5435 11.2 9.5 11.2C7.45655 11.2 5.8 9.54345 5.8 7.5C5.8 5.45655 7.45655 3.8 9.5 3.8C11.5435 3.8 13.2 5.45655 13.2 7.5ZM12.7006 11.9734C11.799 12.6196 10.6939 13 9.5 13C6.46243 13 4 10.5376 4 7.5C4 4.46243 6.46243 2 9.5 2C12.5376 2 15 4.46243 15 7.5C15 8.69391 14.6196 9.79896 13.9734 10.7006L15.6364 12.3636C15.9879 12.7151 15.9879 13.2849 15.6364 13.6364C15.2849 13.9879 14.7151 13.9879 14.3636 13.6364L12.7006 11.9734Z" />
        </g>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="19.9" height="19.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="2"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
    </Svg>
  );
};

export default Icon;
