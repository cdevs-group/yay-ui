import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.40137 5.40039L16.2041 16.2031" stroke="#F65656" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.2041 5.40039L5.40137 16.2031" stroke="#F65656" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Icon;
