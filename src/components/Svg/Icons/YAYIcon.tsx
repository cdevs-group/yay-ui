import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="29" height="29" rx="7" fill="url(#paint0_linear)" />
      <rect width="29" height="28" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="translate(-0.448276 -0.0467986) scale(0.00167169)" />
        </pattern>
        <linearGradient id="paint0_linear" x1="14.5" y1="-4.64" x2="14.5" y2="29" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4CEE3E" />
          <stop offset="1" stop-color="#3FBF35" />
        </linearGradient>
        <image
          id="image0"
          width="1052"
          height="611"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Icon;