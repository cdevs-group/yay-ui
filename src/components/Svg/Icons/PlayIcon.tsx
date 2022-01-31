import React from "react";
import { useTheme } from "styled-components";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <svg width="22" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 13.1683V7.83167C8 7.0405 8.87525 6.56266 9.54076 6.99049L13.6915 9.65882C14.3038 10.0525 14.3038 10.9475 13.6915 11.3412L9.54076 14.0095C8.87525 14.4373 8 13.9595 8 13.1683Z"
        fill={props.fill || theme.colors.green}
      />
      <circle cx="10.5" cy="10.5" r="9.5" stroke={props.stroke || theme.colors.green} strokeWidth="2" />
    </svg>
  );
};

export default Icon;
