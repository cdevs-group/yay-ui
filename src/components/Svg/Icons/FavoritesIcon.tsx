import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="23" height="20" viewBox="0 0 23 20" fill="none" color="" {...props}>
      <path
        d="M6.775 1C3.58562 1 1 3.58259 1 6.76822C1 12.5364 7.825 17.7803 11.5 19C15.175 17.7803 22 12.5364 22 6.76822C22 3.58259 19.4144 1 16.225 1C14.272 1 12.5448 1.96854 11.5 3.45097C10.9675 2.69334 10.26 2.07503 9.43755 1.64839C8.61507 1.22175 7.70178 0.999347 6.775 1Z"
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
