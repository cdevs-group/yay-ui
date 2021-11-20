import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 5.88889L7.25 12L16 1" stroke="#49DE3C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Icon;
