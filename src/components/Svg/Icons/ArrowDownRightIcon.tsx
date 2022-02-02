import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 9H9M9 9V1M9 9L1 1" stroke={theme.colors.green} strokeWidth="1.8" strokeLinecap="round" {...props} />
    </svg>
  );
};

export default Icon;
