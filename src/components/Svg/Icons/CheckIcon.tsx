import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.375 4.5L5.96875 9.09375L13.625 1.4375" stroke={theme.colors.green} strokeWidth="2.8" />
    </svg>
  );
};

export default Icon;
