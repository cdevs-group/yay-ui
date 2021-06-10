import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 21" {...props}>
      <g filter="url(#filter0_d)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1163 11.9792C16.3638 11.7881 15 10.3033 15 8.5C15 6.69693 16.3634 5.21231 18.1155 5.02087C16.9439 4.36423 15.6032 4 14.205 4L13.7955 4C10.7282 4 7.93771 5.75284 6.60158 8.50024C7.93771 11.2476 10.7282 13.0005 13.7955 13.0005H14.205C15.6035 13.0005 16.9445 12.6361 18.1163 11.9792ZM4.58988 8.0862C4.52878 8.22062 4.49991 8.36147 4.5 8.50009C4.49986 8.6388 4.52873 8.77977 4.58988 8.91429L4.6918 9.13852C6.3145 12.7085 9.87403 15.0005 13.7955 15.0005H14.205C18.1265 15.0005 21.686 12.7085 23.3087 9.13852L23.4106 8.91429C23.4717 8.77982 23.5006 8.63891 23.5005 8.50024C23.5006 8.36158 23.4717 8.22067 23.4106 8.0862L23.3087 7.86197C21.686 4.29203 18.1265 2 14.205 2H13.7955C9.87403 2 6.3145 4.29203 4.6918 7.86197L4.58988 8.0862Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d" x="0.5" y="0" width="27.0005" height="21.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
    </Svg>
  );
};

export default Icon;