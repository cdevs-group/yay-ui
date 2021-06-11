import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width='42px' viewBox="0 0 42 42" {...props}>
<rect x="6" y="6" width="30" height="30" rx="7" fill={props.fill || 'rgb(58,58,64)'}/>
<g filter="url(#filter0_d)">
<path d="M16 18H27" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
</g>
<g filter="url(#filter1_d)">
<path d="M18 22L25 22" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
</g>
<g filter="url(#filter2_d)">
<path d="M19 26H24" stroke="white" stroke-width="1.8" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d" x="11.0996" y="15.1" width="20.8" height="9.8" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="13.0996" y="19.1001" width="16.8" height="9.8" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="14.0996" y="23.1001" width="14.8" height="9.8" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="21" y1="1.2" x2="21" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#4CEE3E"/>
<stop offset="1" stop-color="#47DA3B"/>
</linearGradient>
</defs>
</Svg>
  );
};

export default Icon;
