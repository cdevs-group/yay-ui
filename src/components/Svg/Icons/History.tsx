import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="37" height="37" viewBox="0 0 37 37" {...props}>
      <g filter="url(#filter0_d)">
      <path d="M13 21.5C13 26.7467 17.2533 31 22.5 31C27.7467 31 32 26.7467 32 21.5C32 16.2533 27.7467 12 22.5 12C20.4503 12 18.5521 12.6492 17 13.7531" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round"/>
      </g>
      <g filter="url(#filter1_d)">
      <path d="M20 23.5L22 20.5H26" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round"/>
      </g>
      <defs>
      <filter id="filter0_d" x="0" y="0" width="37" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dx="-4" dy="-3"/>
      <feGaussianBlur stdDeviation="4"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <filter id="filter1_d" x="7" y="8.5" width="24.0001" height="21.0001" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="1" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dx="-4" dy="-3"/>
      <feGaussianBlur stdDeviation="4"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      </defs>
    </Svg>
  );
};

export default Icon;
