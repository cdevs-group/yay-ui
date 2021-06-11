import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" {...props}>
      <mask id="path-1-inside-1" fill="white">
      <rect x="14" y="24" width="6" height="12" rx="1"/>
      </mask>
      <rect x="14" y="24" width="6" height="12" rx="1" stroke="#F3F3F3" stroke-width="4" mask="url(#path-1-inside-1)"/>
      <mask id="path-2-inside-2" fill="white">
      <rect x="30" y="19" width="6" height="17" rx="1"/>
      </mask>
      <rect x="30" y="19" width="6" height="17" rx="1" stroke="#F3F3F3" stroke-width="4" mask="url(#path-2-inside-2)"/>
      <mask id="path-3-inside-3" fill="white">
      <rect x="22" y="14" width="6" height="22" rx="1"/>
      </mask>
      <rect x="22" y="14" width="6" height="22" rx="1" stroke="#F3F3F3" stroke-width="4" mask="url(#path-3-inside-3)"/>
    </Svg>
  );
};

export default Icon;
