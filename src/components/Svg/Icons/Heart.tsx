import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="15" viewBox="0 0 16 15" fill="none" {...props}>
      <path
        d="M5.00065 1.66797C2.97565 1.66797 1.33398 3.30964 1.33398 5.33464C1.33398 9.0013 5.66732 12.3346 8.00065 13.11C10.334 12.3346 14.6673 9.0013 14.6673 5.33464C14.6673 3.30964 13.0257 1.66797 11.0007 1.66797C9.76065 1.66797 8.66398 2.28364 8.00065 3.22597C7.66255 2.74437 7.21337 2.35133 6.69116 2.08013C6.16895 1.80893 5.58908 1.66755 5.00065 1.66797Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default Icon;
