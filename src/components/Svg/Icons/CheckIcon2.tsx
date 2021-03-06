import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1 5.88889L7.25 12L16 1"
        stroke={props.color || theme.colors.green}
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="round"
        {...props}
      />
    </svg>
  );
};

export default Icon;
